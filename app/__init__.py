import os
from flask import Flask, render_template, request, session
from flask_cors import CORS
from flask_migrate import Migrate
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_login import LoginManager

import os
# Interfacing API for aws S3
import boto3
# File naming for AWS files
from werkzeug.utils import secure_filename

from .models import db, User
from .api.user_routes import user_routes
from .api.auth_routes import auth_routes

from .seeds import seed_commands

from .config import Config

app = Flask(__name__)

# Setup login manager
login = LoginManager(app)
login.login_view = 'auth.unauthorized'


@login.user_loader
def load_user(id):
    return User.query.get(int(id))


# Tell flask about our seed commands
app.cli.add_command(seed_commands)

app.config.from_object(Config)
app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(auth_routes, url_prefix='/api/auth')
db.init_app(app)
Migrate(app, db)

# Application Security
CORS(app)


@app.after_request
def inject_csrf_token(response):
    response.set_cookie('csrf_token',
                        generate_csrf(),
                        secure=True if os.environ.get(
                            'FLASK_ENV') == 'production' else False,
                        samesite='Strict' if os.environ.get(
                            'FLASK_ENV') == 'production' else None,
                        httponly=True)
    return response


s3 = boto3.client('s3',
                  aws_access_key_id=os.environ.get("AWS_ACCESS_KEY_ID"),
                  aws_secret_access_key=os.environ.get(
                      "AWS_SECRET_ACCESS_KEY")
                  # ,aws_session_token=os.environ.get("SECRET_KEY")
                  )
BUCKET_NAME = "scarebnb-hosting"
BUCKET_REGION = s3.get_bucket_location(Bucket=BUCKET_NAME)[
    'LocationConstraint']


@app.route('/image', methods=['get'])
def image():
    return render_template("file_upload_to_s3.html")


@app.route('/image', methods=['post'])
def upload():
    if request.method == 'POST':
        img = request.files['file']
        if img:
            filename = secure_filename(img.filename)
            # img.save(filename)
            s3.put_object(
                Bucket=BUCKET_NAME,
                Body=img,
                Key=filename
            )

            url = f"https://{BUCKET_NAME}.s3.{BUCKET_REGION}.amazonaws.com/{filename}"
            msg = f"Upload done ! Image hosted at: {url}"

    return render_template("file_upload_to_s3.html", msg=msg, url=url)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    print("path", path)
    if path == 'favicon.ico':
        return app.send_static_file('favicon.ico')
    return app.send_static_file('index.html')

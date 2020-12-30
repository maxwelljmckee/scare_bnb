from flask_wtf import FlaskForm
from wtforms import StringField, FileField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    print("Checking if user exits", field.data)
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError("User is already registered.")


class SignUpForm(FlaskForm):
    email = StringField('email', validators=[DataRequired(), user_exists])
    password = StringField('password', validators=[DataRequired()])
    firstName = StringField('firstName', validators=[DataRequired()])
    lastName = StringField('lastName', validators=[DataRequired()])
    bio = StringField('bio')
    profile_pic = FileField('profilePic')

from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField, SubmitField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


class HouseCreateForm(FlaskForm):
    pass

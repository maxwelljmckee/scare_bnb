from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField, SubmitField, FileField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Review

class HouseReviewForm(FlaskForm):
    rating = IntegerField("rating", validators=[DataRequired()])
    comment = TextAreaField("comment", validators=[DataRequired()])



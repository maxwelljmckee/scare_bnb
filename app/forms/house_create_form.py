from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField, SubmitField, FileField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import House


class HouseCreateForm(FlaskForm):
    hostId = IntegerField("hostId", validators=[DataRequired()])
    name = StringField("name", validators=[DataRequired()])
    street1 = StringField("street1", validators=[DataRequired()])
    street2 = StringField("street2", validators=[])
    city = StringField("city", validators=[DataRequired()])
    stateId = IntegerField("stateId", validators=[DataRequired()])
    postalCode = IntegerField("postalCode", validators=[DataRequired()])
    description = StringField("description", validators=[DataRequired()])
    maxGuests = IntegerField("maxGuests", validators=[DataRequired()])
    numBedrooms = IntegerField("numBedrooms", validators=[DataRequired()])
    numBeds = IntegerField("numBeds", validators=[DataRequired()])
    numBaths = IntegerField("numBaths", validators=[DataRequired()])
    price = IntegerField("price", validators=[DataRequired()])
    housePic = FileField('housePic')

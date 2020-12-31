from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField, SubmitField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import House


class HouseCreateForm(FlaskForm):
    # host_id = IntegerField("hostId", validators=[DataRequired()])
    name = StringField("name", validators=[DataRequired()])
    street_1 = IntegerField("street1", validators=[DataRequired()])
    street_2 = IntegerField("street2", validators=[DataRequired()])
    city = StringField("city", validators=[DataRequired()])
    state_id = IntegerField("stateId", validators=[DataRequired()])
    postal_code = IntegerField("postalCode", validators=[DataRequired()])
    # house_pic_url = IntegerField("stateId", validators=[DataRequired()])
    description = StringField("description", validators=[DataRequired()])
    max_guests = IntegerField("maxGuest", validators=[DataRequired()])
    num_bedrooms = IntegerField("numBedrooms", validators=[DataRequired()])
    num_beds = IntegerField("numBedrooms", validators=[DataRequired()])
    num_baths = IntegerField("numBedrooms", validators=[DataRequired()])
    price = IntegerField("description", validators=[DataRequired()])

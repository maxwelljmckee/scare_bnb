from flask_wtf import FlaskForm
from wtforms import DateTimeField, IntegerField, SubmitField
from wtforms.validators import DataRequired, ValidationError
from app.models import Booking


class BookingCreateForm(FlaskForm):
    houseId = IntegerField('houseId', validators=[DataRequired()])
    guestId = IntegerField('guestId', validators=[DataRequired()])
    checkin = DateTimeField('checkin', format='%Y-%m-%dT%H:%M:%S.%f%z', validators=[DataRequired()])
    checkout = DateTimeField('checkout', format='%Y-%m-%dT%H:%M:%S.%f%z', validators=[DataRequired()])
    numGuests = IntegerField('numGuests', validators=[DataRequired()])


# '2021-01-01T00:04:57.344Z'
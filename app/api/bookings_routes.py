from flask import Blueprint, jsonify, session, request
from app.models import db, House, Booking
from app.forms import BookingCreateForm
from datetime import datetime


bookings_routes = Blueprint('bookings', __name__)


def validator_errors_to_error_messages(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


@bookings_routes.route('/create', methods=['POST'])
def post_new_booking():
    form = BookingCreateForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    print(form.data)
    print(request.json)
    if form.validate_on_submit():
        print('hit conditional')
        new_booking = Booking(
            house_id=int(form.data['houseId']),
            guest_id=int(form.data['guestId']),
            checkin=form.data['checkin'],
            checkout=form.data['checkout'],
            num_guests=int(form.data['numGuests']),
            created_at=datetime.now(),
            updated_at=datetime.now()
        )

        print('='*20, new_booking)
        db.session.add(new_booking)
        db.session.commit()
        return new_booking.to_dict()
    print('failed conditional')
    return {'errors': validator_errors_to_error_messages(form.errors)}


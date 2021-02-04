import os

from flask import Blueprint, jsonify, session, request
from app.models import db, House, State, Review
from app.forms import HouseCreateForm

from .utils.awsS3 import upload_file_to_s3

from datetime import datetime

houses_routes = Blueprint('houses', __name__)

def validator_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


@houses_routes.route('/states')
def get_states():
    states = State.query.all()
    data = [ state.to_dict() for state in states ]
    return jsonify(data)




@houses_routes.route('create', methods=['POST'])
def create_house():
    form = HouseCreateForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    for key in dict.keys(form.data):
        print(key)
        print('\t', form.data[key])

    if form.validate_on_submit():
        house = House(
            host_id=form.data['hostId'],
            name=form.data['name'],
            street_1=form.data['street1'],
            street_2=form.data['street2'],
            city=form.data['city'],
            state_id=form.data['stateId'],
            postal_code=form.data['postalCode'],
            house_pic_url=None,
            description=form.data['description'],
            max_guests=int(form.data['maxGuests']),
            num_bedrooms=int(form.data['numBedrooms']),
            num_beds=int(form.data['numBeds']),
            num_baths=int(form.data['numBaths']),
            price=int(form.data['price'])
        )
        db.session.add(house)
        db.session.commit()

        house_pic = request.files['housePic']

        filename = f"house-pic-{house.id}.jpg"

        url = upload_file_to_s3(house_pic, filename)

        house.house_pic_url = url

        db.session.add(house)
        db.session.commit()

        return house.to_dict()

        return house.to_dict()
    return {'errors': validator_errors_to_error_messages(form.errors)}


@houses_routes.route('/')
def get_all_houses():
    all_houses = House.query.all()
    data = [house.to_dict() for house in all_houses]
    return jsonify(data)


# POST request
    # request.json.get('name', None)
    # new_house = {k: v for k, v in request.json.items() if k not in ('csrf', '')}
    # db.session.add(new_house)
    # db.session.commit()


@houses_routes.route('/<int:id>', methods=['GET'])
def get_house_details(id):
    house = House.query.get(id)
    # reviews = Review.query.filter_by(house_id=id).all()
    # house["reviewsList"] = reviews
    # reviews = [review.to_dict() for review in reviews]

    if house:
        house = house.to_dict()
        # house["reviews"] = reviews[::-1]
        return house

    return {'errors': ['The requested house does not exist']}, 404


@houses_routes.route('/<id>/reviews', methods=['POST'])
def write_review(id):
    review = Review(
        user_id= int(request.json.get('userId')),
        house_id= int(id),
        rating= int(request.json.get('rating')),
        comment= request.json.get('comment'),
        created_at=datetime.now(),
        updated_at=datetime.now()
    )

    db.session.add(review)
    db.session.commit()

    return review.to_dict()

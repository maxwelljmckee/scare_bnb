import os

from flask import Blueprint, jsonify, session, request
from app.models import db, House, State
from app.forms import house_create_form

from .utils.awsS3 import upload_file_to_s3

houses_routes = Blueprint('houses', __name__)



@houses_routes.route('/')
def get_houses():
    request.json.get('name', None)
    new_house = {k: v for k, v in request.json.items() if k not in ('csrf', '')}
    db.session.add(new_house)
    db.session.commit()

@houses_routes.route('/states')
def get_states():
    states = State.query.all()
    data = [ state.to_dict() for state in states ]
    return jsonify(data)




@houses_routes.route('create', methods=['POST'])
def create_house():
    print(request.form)
    print(request.files)
    host_id = request.form.get("hostId", None)
    name = request.form.get("name", None)
    street_1 = request.form.get("street1", None)
    street_2 = request.form.get("street2", None)
    city = request.form.get("city", None)
    state_id = request.form.get("state", None)
    postal_code= request.form.get("postalCode", None)
    house_pic_url= request.form.get("housePicUrl", None)
    description = request.form.get("description", None)
    max_guests = request.form.get("maxGuests", None)
    num_bedrooms = request.form.get("numBedrooms", None)
    num_beds = request.form.get("numBeds", None)
    num_baths = request.form.get("numBaths", None)
    price = request.form.get("price", None)

    # state = State.query.get(state)
    house = House( host_id=host_id, name=name, street_1=street_1, street_2=street_2, city=city, state_id=state_id, postal_code=postal_code, house_pic_url=None, description=description, max_guests=int(max_guests), num_bedrooms=int(num_bedrooms), num_beds=int(num_beds), num_baths=int(num_baths), price=int(price))
    db.session.add(house)
    db.session.commit()

    print(house.id)

    house_pic = request.files['housePic']

    print(house_pic)

    filename = f"house-pic-{house.id}{os.path.splitext(house_pic)[0]}"

    url = upload_file_to_s3(house_pic, filename)

    print(url)

    house.house_pic_url = url

    db.session.add(house)
    db.session.commit()

    return house.to_dict()





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

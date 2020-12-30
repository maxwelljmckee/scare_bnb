from flask import Blueprint, jsonify, session, request
from app.models import db, House, State
from app.forms import house_create_form

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




@houses_routes.route('/register', methods=['POST'])
def create_house():
    # print('here it is')
    # print(session)
    # # print(session._id)
    # # print(session.SecureCookieSession)
    # # print(session._user_id)
    # user = session.get(_user_id)
    # print(user)
    # host_id = session._user_id
    user = request.json.get("userId")
    print(user)
    name = request.json.get("name", None)
    street_1 = request.json.get("street1", None)
    street_2 = request.json.get("street2", None)
    city = request.json.get("city", None)
    state = request.json.get("state", None)
    postcal_code= request.json.get("postalCode", None)
    house_pic_url= request.json.get("housePicUrl", None)
    description = request.json.get("description", None)
    max_guests = request.json.get("maxGuests", None)
    num_bedrooms = request.json.get("numBedrooms", None)
    num_beds = request.json.get("numBeds", None)
    num_baths = request.json.get("numBaths", None)
    price = request.json.get("price", None)

    request.json
    house = House( host_id, name, street_1, street_2, city, state,postcal_code, house_pic_url, description, max_guests, num_bedrooms, num_beds, num_baths, price )
    db.session.add(house)
    db.session.commit()
    return house.to_dict()









# POST request
    # request.json.get('name', None)
    # new_house = {k: v for k, v in request.json.items() if k not in ('csrf', '')}
    # db.session.add(new_house)
    # db.session.commit()

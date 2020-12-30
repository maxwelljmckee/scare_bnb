from flask import Blueprint, jsonify, session, request
from app.models import db, House
from app.forms import house_create_form

houses_routes = Blueprint('houses', __name__)



@houses_routes.route('/', method='GET')
def get_houses():
    request.json.get('name', None)
    new_house = {k: v for k, v in request.json.items() if k not in ('csrf', '')}
    db.session.add(new_house)
    db.session.commit()

@houses_routes.router('/states', method="GET")
def get_states():
    states = State.query.all()
    return states.to_dict()


@house_routes.route('/register', method=['POST'])
def create_house():
    name = request.json.get("name", None)
    street_1 = request.json.get("street 1", None)
    street_2 = request.json.get("street 2", None)
    city = request.json.get("city", None)
    state = request.json.get("state", None)
    postcal_code= request.json.get("postal code", None)
    house_pic_url= request.json.get("house image", None)
    description = request.json.get("description", None)
    guest = request.json.get("guest", None)
    bedroom = request.json.get("bedroom", None)
    beds = request.json.get("beds", None)
    bath = request.json.get("bath", None)
    price = request.json.get("price", None)


    house = House( name, street_1, street_2, city, state,postcal_code, house_pic_url, descriptionguest, bedroom, beds,bath, price )
    db.session.add(house)
    db.session.commit()
    return house.to_dict()









# POST request
    # request.json.get('name', None)
    # new_house = {k: v for k, v in request.json.items() if k not in ('csrf', '')}
    # db.session.add(new_house)
    # db.session.commit()

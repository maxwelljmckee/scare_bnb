from flask import Blueprint, jsonify, session, request
from app.models import db, House
from app.forms import house_create_form

houses_routes = Blueprint('houses', __name__)


@houses_routes.route('/states', methods=['GET'])
def get_all_states():
    State.query.all()







# POST request
    # request.json.get('name', None)
    # new_house = {k: v for k, v in request.json.items() if k not in ('csrf', '')}
    # db.session.add(new_house)
    # db.session.commit()


@houses_routes.route('/<id>', methods=['GET'])
def get_house_details(id):
    house = House.query.get(id)
    if house:
        return house.to_dict()
    return {'errors': ['The requested house does not exist']}, 404

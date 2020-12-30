from flask import Blueprint, jsonify, session, request
from app.models import db, House
from app.forms import house_create_form

houses_routes = Blueprint('houses', __name__)


@houses_routes.route('/states', methods=['GET'])
def get_all_states():
    State.query.all()


@houses_routes.route('/')
def get_all_houses():
    print(request)
    all_houses = House.query.all()
    data = [house.to_dict() for house in all_houses]
    return jsonify(data)





# POST request
    # request.json.get('name', None)
    # new_house = {k: v for k, v in request.json.items() if k not in ('csrf', '')}
    # db.session.add(new_house)
    # db.session.commit()
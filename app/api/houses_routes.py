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

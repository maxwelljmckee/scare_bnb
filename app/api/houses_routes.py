from flask import Blueprint, jsonify, session, request
from app.models import db, House
from app.forms import house_create_form

houses_routes = Blueprint('houses', __name__)


@houses_routes.route('/', method='GET')
def get_houses():
    houses = House.query.all()
from .db import db


class Amenity(db.Model):
    __tablename__ = 'amenities'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    amenity_name = db.Column(db.String(20), nullable=False)
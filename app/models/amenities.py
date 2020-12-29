from .db import db
from .house import house_amenities


class Amenity(db.Model):
    __tablename__ = 'amenities'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    amenity_name = db.Column(db.String(20), nullable=False)

    houses = db.relationship('House', secondary=house_amenities, back_populates='amenities')
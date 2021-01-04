from .db import db
from .house import house_amenities


class Amenity(db.Model):
    __tablename__ = 'amenities'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    amenity_name = db.Column(db.String(200), nullable=False)
    icon = db.Column(db.String(25))

    houses = db.relationship('House', secondary=house_amenities, back_populates='amenities')

    def to_dict(self):
        return {
            "id": self.id,
            "amenity_name": self.amenity_name,
            "icon": self.icon
        }

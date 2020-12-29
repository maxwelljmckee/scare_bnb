from .db import db


class Booking(db.Model):
    __tablename__ = 'bookings'
    id = db.Column(db.Integer, nullable=False)
    house_id = db.Column(db.Integer, db.ForeignKey('house.id'), nullable=False)
    guest_id = db.Column(db.Integer, db.ForeignKey('guest.id'), nullable=False)
    checkin = db.Column(db.DateTime, nullable=False)
    checkout = db.Column(db.DateTime, nullable=False)
    num_guests = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, nullable= False)
    updated_at = db.Column(db.DateTime, nullable= False)

    house = db.relationship('House', back_populates='bookings')
    owner = db.relationship('User', back_populates='bookings')

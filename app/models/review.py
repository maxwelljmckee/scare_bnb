from .db import db

class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, nullable=False)
    house_id = db.Column(db.Integer, db.ForeignKey('house.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    rating = db.Column(db.Integer(1-5), nullable= False)
    comment = db.Column(db.String(500), nullable= False)
    created_at = db.Column(db.DateTime, nullable= False)
    updated_at = db.Column(db.DateTime, nullable= False)

    house = db.relationship('House', back_populates='reviews')
    owner = db.relationship('User', back_populates='reviews')

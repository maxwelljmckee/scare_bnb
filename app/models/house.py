from .db import db


class House(db.Model):
    __tablename__ = 'houses'

    id = db.Column(db.Integer, nullable=False)
    host_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    name = db.Column(db.String(), nullable=False)
    street_1 = db.Column(db.String(100), nullable=False)
    street_2 = db.Column(db.String(100), nullable=True)
    city = db.Column(db.String(50), nullable=False)
    state = db.Column(db.Integer, db.ForeignKey('state.id'), nullable=False)
    postal_code = db.Column(db.String(5), nullable=False)
    house_pic_url = db.Column(db.String(500), nullable=True)
    description = db.Column(db.Text, nullable=False)
    max_guests = db.Column(db.Integer, nullable=False)
    num_bedrooms = db.Column(db.Integer, nullable=False)
    num_beds = db.Column(db.Integer, nullable=False)
    num_baths = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Integer, nullable=False)
    smoking = db.Column(db.Boolean, nullable=False)
    pets_allowed = db.Column(db.Boolean, nullable=False)
    wifi = db.Column(db.Boolean, nullable=False)

    owner = db.relationship('User', back_populates='houses')
    reviews = db.relationship('Review', back_populates='houses')
    bookings = db.relationship('Booking', back_populates='houses')

    def is_booked(self):
        # check self.bookings against dates

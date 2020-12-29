from .db import db
# from .tag import


house_tags = db.Table('house_tags',
                      db.Column('house_id', db.Integer, db.ForeignKey(
                          'houses.id'), primary_key=True),
                      db.Column('tag_id', db.Integer, db.ForeignKey(
                          'tags.id'), primary_key=True)
                      )


class House(db.Model):
    __tablename__ = 'houses'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    host_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    name = db.Column(db.String(), nullable=False)
    street_1 = db.Column(db.String(100), nullable=False)
    street_2 = db.Column(db.String(100), nullable=True)
    city = db.Column(db.String(50), nullable=False)
    state = db.Column(db.Integer, db.ForeignKey('states.id'), nullable=False)
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
    state = db.relationship('State', back_populates='houses')
    tags = db.relationship('Tag', secondary=house_tags, back_populates='houses')

    def is_booked(self):
        # check self.bookings against dates
        pass

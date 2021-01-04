from .db import db
# from .tag import


house_tags = db.Table('house_tags',
                      db.Column('house_id', db.Integer, db.ForeignKey(
                          'houses.id'), primary_key=True),
                      db.Column('tag_id', db.Integer, db.ForeignKey(
                          'tags.id'), primary_key=True)
                      )

house_amenities = db.Table('house_amenities',
                      db.Column('house_id', db.Integer, db.ForeignKey(
                          'houses.id'), primary_key=True),
                      db.Column('amenity_id', db.Integer, db.ForeignKey(
                          'amenities.id'), primary_key=True)
                      )


class House(db.Model):
    __tablename__ = 'houses'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    host_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    name = db.Column(db.String(), nullable=False)
    street_1 = db.Column(db.String(200), nullable=False)
    street_2 = db.Column(db.String(200), nullable=True)
    city = db.Column(db.String(100), nullable=False)
    state_id = db.Column(db.Integer, db.ForeignKey('states.id'), nullable=False)
    postal_code = db.Column(db.String(5), nullable=False)
    house_pic_url = db.Column(db.String(500), nullable=True)
    description = db.Column(db.Text, nullable=False)
    max_guests = db.Column(db.Integer, nullable=False)
    num_bedrooms = db.Column(db.Integer, nullable=False)
    num_beds = db.Column(db.Integer, nullable=False)
    num_baths = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Integer, nullable=False)
    latitude = db.Column(db.Float, nullable=True)
    longitude = db.Column(db.Float, nullable=True)



    owner = db.relationship('User', back_populates='houses')
    reviews = db.relationship('Review', back_populates='house')
    bookings = db.relationship('Booking', back_populates='house')
    state = db.relationship('State', back_populates='houses')
    tags = db.relationship('Tag', secondary=house_tags, back_populates='houses')
    amenities = db.relationship('Amenity', secondary=house_amenities,
                                back_populates='houses')


    def to_dict(self):
        return {
            "id": self.id,
            "host_id": self.host_id,
            "host": self.owner.to_dict(),
            "name": self.name,
            "street_1": self.street_1,
            "street_2": self.street_2,
            "city": self.city,
            "state_id": self.state_id,
            "postal_code": self.postal_code,
            "house_pic_url": self.house_pic_url,
            "description": self.description,
            "max_guests": self.max_guests,
            "num_bedrooms": self.num_bedrooms,
            "num_beds": self.num_beds,
            "num_baths": self.num_baths,
            "price": self.price,
            "latitude": self.latitude,
            "longitude": self.longitude,
            "state": self.state.state_name,
            # "reviews": self.reviews.to_dict(),
            # "bookings": self.bookings.to_dict(),
            # "tags": self.tags.to_dict(),
            # "amenities": [x.to_dict() for x in self.amenities]
        }

    def is_booked(self):
        # check self.bookings against dates
        pass

    def to_dict(self):
        if not self.house_pic_url:
            url = "https://scarebnb-hosting.s3.us-east-2.amazonaws.com/default-house-image.jpg"
        else:
            url = self.house_pic_url

        return {
            "id": self.id,
            "host_id": self.host_id,
            "host": self.owner.to_dict(),
            "name": self.name,
            "street_1": self.street_1,
            "street_2": self.street_2,
            "city": self.city,
            "state_id": self.state_id,
            "postal_code": self.postal_code,
            "house_pic_url": url,
            "description": self.description,
            "max_guests": self.max_guests,
            "num_bedrooms": self.num_bedrooms,
            "num_beds": self.num_beds,
            "num_baths": self.num_baths,
            "price": self.price,
            "latitude": self.latitude,
            "longitude": self.longitude,
            "state": self.state.state_name,
            # "reviews": self.reviews.to_dict(),
            # "bookings": self.bookings.to_dict(),
            # "tags": self.tags.to_dict(),
            "amenities": [x.to_dict() for x in self.amenities]

        }

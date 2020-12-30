from app.models import db, Amenity, House

import random

def seed_house_amenities():
    amenities = Amenity.query.all()
    houses = House.query.all()

    for house in houses:
        numAmenities = random.randint(3,12)

        new_amenities = random.sample(amenities, numAmenities) # [amenity1, amenity2, amenity3]
        for amenity in new_amenities:
            house.amenities.append(amenity)

        db.session.add(house)

    db.session.commit()


def undo_house_amenities():
    db.session.execute('TRUNCATE house_amenities;')
    db.session.commit()

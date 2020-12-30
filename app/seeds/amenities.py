from werkzeug.security import generate_password_hash
from app.models import db, Amenity

def seed_amenities():
    """
    Model:
    Amenity(amenity_name="")

    """
    kitchen = Amenity(amenity_name="Kitchen")
    free_parking = Amenity(amenity_name="No free parking on premises")
    tv = Amenity(amenity_name="TV")
    hangers = Amenity(amenity_name="Hangers")
    hair_dryers = Amenity(amenity_name="Hair dryer")
    microwave = Amenity(amenity_name="Microwave")
    keypad = Amenity(amenity_name="Keypad")
    private_entrance = Amenity(amenity_name="Private Entrance")
    hangers = Amenity(amenity_name="Hangers")
    bedlinens = Amenity(amenity_name="Bed Linens")
    extra_pilows = Amenity(amenity_name="Extra pillows")
    murder_kit = Amenity(amenity_name="Murder Kit")

    wifi = Amenity(amenity_name="No Wifi")
    workspace =Amenity(amenity_name="Dedicated workspace")
    iron =Amenity(amenity_name="Iron")
    essentials = Amenity(amenity_name="Essentials")
    air_condition = Amenity(amenity_name="Air conditioning")
    refrigerator = Amenity(amenity_name="Refrigerator")
    coffee_maker = Amenity(amenity_name="Coffee maker")
    dishwasher = Amenity(amenity_name="Dishwasher")
    hot_water = Amenity(amenity_name="No hot water")
    axe = Amenity(amenity_name="Axe")
    shotgun = Amenity(amenity_name="Shotgun")
    murder_weapon = Amenity(amenity_name="Murder weapon")


    amenities = [murder_weapon, wifi, workspace, iron, essentials,air_condition,refrigerator,coffee_maker, dishwasher,hot_water, axe,shotgun, keypad, kitchen,tv, hangers, hair_dryers, microwave, private_entrance, hangers, murder_kit, extra_pilows, bedlinens, free_parking]

    for amenity in amenities:
        db.session.add(amenity)

    db.session.commit()


def undo_amenities():
    db.session.execute('TRUNCATE amenities;')
    db.session.execute('TRUNCATE house_amenities;')
    db.session.commit()






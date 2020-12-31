from werkzeug.security import generate_password_hash
from app.models import db, Amenity

def seed_amenities():
    """
    Model:
    Amenity(amenity_name="")

    """
    kitchen = Amenity(amenity_name="Kitchen", icon="fas fa-sink")
    free_parking = Amenity(amenity_name="No free parking on premises", icon="fas fa-parking")
    tv = Amenity(amenity_name="TV", icon="fas fa-tv")
    hangers = Amenity(amenity_name="Hangers", icon="fas fa-tshirt")
    hair_dryers = Amenity(amenity_name="Hair dryer", icon="fas fa-wind")
    microwave = Amenity(amenity_name="Microwave", icon="fas fa-temperature-high")
    keypad = Amenity(amenity_name="Keypad", icon="fas fa-keyboard")
    private_entrance = Amenity(amenity_name="Private Entrance", icon="fas fa-door-closed")
    bedlinens = Amenity(amenity_name="Bed Linens", icon="fas fa-bed")
    extra_pilows = Amenity(amenity_name="Extra pillows", icon="fas fa-procedures")
    murder_kit = Amenity(amenity_name="Murder Kit", icon="fas fa-medkit")

    wifi = Amenity(amenity_name="No Wifi", icon="fas fa-wifi")
    workspace =Amenity(amenity_name="Dedicated workspace", icon="fas fa-laptop-house")
    iron =Amenity(amenity_name="Iron", icon="fas fa-tshirt")
    essentials = Amenity(amenity_name="Essentials", icon="fas fa-exclamation-circle")
    air_condition = Amenity(amenity_name="Air conditioning", icon="fas fa-fan")
    refrigerator = Amenity(amenity_name="Refrigerator", icon="fas fa-ice-cream")
    coffee_maker = Amenity(amenity_name="Coffee maker", icon="fas fa-coffee")
    dishwasher = Amenity(amenity_name="Dishwasher", icon="fas fa-soap")
    hot_water = Amenity(amenity_name="No hot water", icon="fas fa-shower")
    axe = Amenity(amenity_name="Axe", icon="fas fa-tree")
    shotgun = Amenity(amenity_name="Shotgun", icon="fas fa-fighter-jet")
    murder_weapon = Amenity(amenity_name="Murder weapon", icon="far fa-dizzy")


    amenities = [murder_weapon, wifi, workspace, iron, essentials,air_condition,refrigerator,coffee_maker, dishwasher,hot_water, axe,shotgun, keypad, kitchen,tv, hangers, hair_dryers, microwave, private_entrance, hangers, murder_kit, extra_pilows, bedlinens, free_parking]

    for amenity in amenities:
        db.session.add(amenity)

    db.session.commit()


def undo_amenities():
    db.session.execute('TRUNCATE amenities;')
    db.session.execute('TRUNCATE house_amenities;')
    db.session.commit()

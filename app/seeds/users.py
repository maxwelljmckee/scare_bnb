from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():
    """
    Model:
    User(last_name="", first_name="", bio="", email="", hashed_password=generate_password_hash(123), is_host=False)

    """

    Peter = User(last_name="Jessee", first_name="Peter", bio="Trillionaire fashion designer. Run an alligator circus on the side. Book my venues for an incredible haunted experience. No refunds will be given.", email="peter@aa.io", hashed_password=generate_password_hash("123"), is_host=False)
    Mathias = User(last_name="Anderson", first_name="Mathias", bio="A retired Antarctic explorer, who loves to scare the shit out of people using sock puppets and animal balloons.", email="mathias@aa.io", hashed_password=generate_password_hash("123"), is_host=False)
    Max = User(last_name="McKee", first_name="Max", bio="Dork Supreme. I always serve mashed potatos using an ice cream scoop.", email="max@aa.io", hashed_password=generate_password_hash("123"), is_host=False)
    Sam = User(last_name="Stark", first_name="Sam", bio="Reppin the long lost city of Atlantis. Former American Ninja warrior contestant.", email="sam@aa.io", hashed_password=generate_password_hash("123"), is_host=False)
    Bryce = User(last_name="Morgan", first_name="Bryce", bio="Supreme and benevolent leader of the Python Flask module.", email="bryce@aa.io", hashed_password=generate_password_hash("123"), is_host=False)
    Demo = User(last_name="User", first_name="Demo", bio="Demo User", email="demo@aa.io", hashed_password=generate_password_hash("123"), is_host=False)



    users = [Peter, Mathias, Max, Sam, Bryce, Demo]

    for user in users:
        db.session.add(user)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()

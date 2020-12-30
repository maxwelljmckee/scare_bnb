from werkzeug.security import generate_password_hash
from app.models import db, State

def seed_states():
    """
    Model:
    State(state_name="")

    """
    # michigan = State(id="MI", state_name="Michigan")
    # oklahoma = State(id="OK", state_name="Oklahoma")

    # states = [oklahoma]

    state = State(state_name="Michigan")

    # for state in states:
    db.session.add(state)

    db.session.commit()

def undo_states():
    db.session.execute('TRUNCATE states;')
    db.session.commit()

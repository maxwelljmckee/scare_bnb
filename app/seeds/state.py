from werkzeug.security import generate_password_hash
from app.models import db, State

def seed_state():
    """
    Model:
    State(state_name="")

    """
    michigan = State(state_id="MI", state_name="Michigan")
    states = [michigan]

    for state in states:
        db.session.add(state)

    db.session.commit()

def undo_states():
    db.session.execute('TRUNCATE states;')
    db.session.commit()

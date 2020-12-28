from .db import db


class State(db.Model):
    __tablename__ = 'states'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    state_name = db.Column(db.String(2), nullable=False)
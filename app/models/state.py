from .db import db


class State(db.Model):
    __tablename__ = 'states'

    id = db.Column(db.String(2), primary_key=True, nullable=False)
    state_name = db.Column(db.String(50), nullable=False)

    houses = db.relationship('House', back_populates='state')

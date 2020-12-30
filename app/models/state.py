from .db import db


class State(db.Model):
    __tablename__ = 'states'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    state_name = db.Column(db.String(50), nullable=False)

    houses = db.relationship('House', back_populates='state')

    def to_dict(self):
        return {
        "id": self.id,
        "state_name": self.state_name,
        }

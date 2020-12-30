from .db import db
from .house import house_tags


class Tag(db.Model):
    __tablename__ = 'tags'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    tag_name = db.Column(db.String(50), nullable=False)

    houses = db.relationship('House', secondary=house_tags, back_populates='tags')

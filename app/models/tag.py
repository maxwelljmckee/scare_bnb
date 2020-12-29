from .db import db


class Tag(db.Model):
    __tablename__ = 'tags'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    tag_name = db.Column(db.String(20), nullable=False)

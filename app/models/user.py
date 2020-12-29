from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key=True, nullable=False)
  last_name = db.Column(db.String(50), nullable=False)
  first_name = db.Column(db.String(50), nullable=False)
  bio = db.Column(db.String(300), nullable=True)
  email = db.Column(db.String(255), nullable=False, unique=True)
  hashed_password = db.Column(db.String(255), nullable=False)
  profile_pic_url = db.Column(db.String(500), nullable=True)
  is_host = db.Column(db.Boolean, nullable=False)

  houses = db.relationship('House', back_populates='owner')
  reviews = db.relationship('Review', back_populates='user')
  bookings = db.relationship('Booking', back_populates='guest')


  @property
  def password(self):
    return self.hashed_password

  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)

  def check_password(self, password):
    return check_password_hash(self.password, password)

  def to_dict(self):
    return {
      "id": self.id,
      "email": self.email,
      "last_name": self.last_name,
      "first_name": self.first_name,
      "bio": self.bio,
      "profile_pic_url": self.profile_pic_url,
      "is_host": self.is_host,
    }

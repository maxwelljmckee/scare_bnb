"""Updating tables

Revision ID: 178ae2418526
Revises: 2ad1fc99343d
Create Date: 2020-12-29 17:56:51.986478

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '178ae2418526'
down_revision = '2ad1fc99343d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('houses', sa.Column('latitude', sa.Float(), nullable=True))
    op.add_column('houses', sa.Column('longitude', sa.Float(), nullable=True))
    # op.add_column('houses', sa.Column('state_id', sa.Integer(), nullable=False))
    # op.create_foreign_key("houses_states_id_fk", 'houses', 'states', ['state_id'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    # op.drop_constraint("houses_states_id_fk", 'houses', type_='foreignkey')
    # op.drop_column('houses', 'state_id')
    op.drop_column('houses', 'longitude')
    op.drop_column('houses', 'latitude')
    # ### end Alembic commands ###
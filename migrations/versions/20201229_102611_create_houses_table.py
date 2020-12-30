"""create houses table

Revision ID: f5faf07a7b21
Revises: 6b607892b2a7
Create Date: 2020-12-29 10:26:11.331724

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f5faf07a7b21'
down_revision = '6b607892b2a7'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('houses',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('host_id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('street_1', sa.String(length=200), nullable=False),
    sa.Column('street_2', sa.String(length=200), nullable=True),
    sa.Column('city', sa.String(length=100), nullable=False),
    sa.Column('state_id', sa.Integer(), nullable=False),
    sa.Column('postal_code', sa.String(length=5), nullable=False),
    sa.Column('house_pic_url', sa.String(length=500), nullable=True),
    sa.Column('description', sa.Text(), nullable=False),
    sa.Column('max_guests', sa.Integer(), nullable=False),
    sa.Column('num_bedrooms', sa.Integer(), nullable=False),
    sa.Column('num_beds', sa.Integer(), nullable=False),
    sa.Column('num_baths', sa.Integer(), nullable=False),
    sa.Column('price', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['host_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['state_id'], ['states.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('house_tags',
    sa.Column('house_id', sa.Integer(), nullable=False),
    sa.Column('tag_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['house_id'], ['houses.id'], ),
    sa.ForeignKeyConstraint(['tag_id'], ['tags.id'], ),
    sa.PrimaryKeyConstraint('house_id', 'tag_id')
    )
    op.create_table('house_amenities',
                    sa.Column('house_id', sa.Integer(), nullable=False),
                    sa.Column('amenity_id', sa.Integer(), nullable=False),
                    sa.ForeignKeyConstraint(['house_id'], ['houses.id'], ),
                    sa.ForeignKeyConstraint(['amenity_id'], ['amenities.id'], ),
                    sa.PrimaryKeyConstraint('house_id', 'amenity_id')
                    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('house_tags')
    op.drop_table('house_amenities')
    op.drop_table('houses')
    # ### end Alembic commands ###

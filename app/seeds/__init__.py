from flask.cli import AppGroup
from .states import seed_states, undo_states
from .users import seed_users, undo_users
from .tags import seed_tags, undo_tags
from .amenities import seed_amenities, undo_amenities
from .houses import seed_houses, undo_houses
from .house_amenities import seed_house_amenities, undo_house_amenities


# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_states()
    seed_users()
    seed_tags()
    seed_amenities()
    seed_houses()
    seed_house_amenities()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_amenities()
    undo_tags()
    undo_users()
    undo_states()
    undo_houses()
    undo_house_amenities()
    # Add other undo functions here

from werkzeug.security import generate_password_hash
from app.models import db, Tag

def seed_tag():
    """
    Model:
    Tag(tag_name="")

    """
    haunted_house = Tag(tag_name="hauntedhouse")
    horror = Tag(tag_name="horror")
    paranormal = Tag(tag_name="paranormal")
    ghost = Tag(tag_name="ghost")
    paranormal_investigator = Tag(tag_name="paranormalInvestigator")
    spooky_season = Tag(tag_name="spookyseason")
    fright_fest = Tag(tag_name="frightfest")
    dead_bride = Tag(tag_name="deadbride")
    haunted_mansion = Tag(tag_name="hauntedmansion")
    abandoned = Tag(tag_name="abandoned")
    american_horror_story = Tag(tag_name="americanhorrorstory")

    soldier = Tag(tag_name="soldier")
    bride = Tag(tag_name="bride")
    dead = Tag(tag_name="dead")
    afterlife = Tag(tag_name="afterlife")
    cemetary = Tag(tag_name="cemetary")
    murder = Tag(tag_name="murder")
    ghoul = Tag(tag_name="ghoul")


    tags = [haunted_mansion, haunted_house, horror, paranormal, ghost, paranormal_investigator,spooky_season, fright_fest, dead_bride, haunted_house, abandoned, american_horror_story, soldier, bride, dead, afterlife, cemetary, murder, ghoul]

    for tag in tags:
        db.session.add(tag)

    db.session.commit()


def undo_tags():
    db.session.execute('TRUNCATE tags;')
    db.session.commit()

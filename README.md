# Welcome to Scarebnb
Scarebnb is a web service that allows users to get their spook on by booking stays at known haunted properties.

## Introduction and Features

This project serves as a clone of the popular online vacation rental marketplace platform, Airbnb, with a scary twist. The online listings for this clone are real sites and landmarks that are claimed to be haunted and subject to paranormal activity, thus the name, Scarebnb. Similar to Airbnb, this clone has the following features:

- **Listings**: Users can browse listings that are thought to be haunted and read access a detail page providing more information about the listing.
- **Bookings**: Users can book a vacation at the haunted domain of their choice. Provided that the venue has the necessary vacancies.
- **Reviews**: Reviews and a ghostly star rating can be created for each listing by a registered user.

## Technologies Used

**Backend**
- Python (Flask)
- SQLAlchemy Object Relational Mapper
- Werkzeug
- pyjwt. Generates javascript web tokens for user sessions
- Alembic. Engine for database relational migrations


**Frontend**
- React.js

## Roadblocks
The most notworthy roadblock in the pursuit of this project was its scope. With only 4 days to take it from ground-zero planning phase to shippable product, we set our goals well above the realistic prospects of the provided time frame. As a result, all three of our features – **Listings**, **Bookings**, and **Reviews** – can be Created, but full CRUD functionality will require additional work.

## Future Phases
- **Complete CRUD Functionality for all features**
   - Most of these features can be achieved with the addition of a few simple buttons. However, there will likely be a need for a user-dashboard view where a user can manage their bookings, account details, and other user data.
- **Scale Seed Data**
   - In order to create a more realistic user-experience, seed data should be expanded to include all 50 states.
- **Searchable Listings**
   - User will be able to filter listing results by location, name/keyword search, price, and other parameters.
- **Migrate to `Google Maps Javascript API`**
   - Given the time constraints of the project, we decided to use the much simpler `Google Maps Embed API` for the sole purpose of expediting the development process. In future updates to the app, a map interface will be added to the Listing-Index page, allowing users to interact with listings on the map, as well as on their unique listing cards.

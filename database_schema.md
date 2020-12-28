Schema for PostgreSQL using SQLAlchemy and Alembic

## `users`
|column name|data type|constraints|
|----------|----------|----------|
|`id`|integer|primary key, not null|
|`last_name`|varchar(50)|not null|
|`first_name`|varchar(50)|not null|
|`bio`|varchar(300)||
|`email`|varchar(50)|unique|
|`hashed_password`|varchar(6-20)|not null|
|`profile_pic_url`|varchar(500)||
|`is_host`|boolean|not null|
|`created_at`|datetime|not null|
|`updated_at`|datetime|not null|


## `houses`
|column name|data type|constraints|
|----------|----------|----------|
|`id`|integer|primary key, not null|
|`host_id`|integer|foreign key, not null|
|`name`|varchar(250)|unique, not null|
|`street_1`|varchar(100)|not null|
|`street_2`|varchar(100)||
|`city`|varchar(50)|not null|
|`state`|varchar(20)|not null|
|`postal_code`|varchar(5)|not null|
|`house_pic_url`|varchar||
|`description`|text|not null|
|`max_guests`|integer|not null|
|`num_bedrooms`|integer|not null|
|`num_beds`|integer|not null|
|`num_baths`|integer|not null|
|`price`|decimal|not null|
|`smoking`|boolean|not null|
|`pets_allowed`|boolean|not null|
|`wifi`|boolean|not null|
|`created_at`|datetime|not null|
|`updated_at`|datetime|not null|


## `house_tags`
|column name|data type|constraints|
|----------|----------|----------|
|`id`|integer|primary key, not null|
|`house_id`|integer|foreign key, not null|
|`tag_id`|integer|foreign_key, not null|
|`created_at`|datetime|not null|
|`updated_at`|datetime|not null|


## `tags`
|column name|data type|constraints|
|----------|----------|----------|
|`id`|integer|primary key, not null|
|`tag_name`|varchar(20)|unique, not nul|
|`created_at`|datetime|not null|
|`updated_at`|datetime|not null|


## `bookings`
|column name|data type|constraints|
|----------|----------|----------|
|`id`|integer|primary key, not null|
|`house_id`|integer||
|`guest_id`|integer||
|`checkin`|datetime||
|`checkout`|datetime||
|`num_guests`|integer||
|`created_at`|datetime|not null|
|`updated_at`|datetime|not null|


## `reviews`
|column name|data type|constraints|
|----------|----------|----------|
|`id`|integer|primary key, not null|
|`house_id`|integer|foreign key, not null|
|`user_id`|integer|foreign key, not null|
|`rating`|integer(1-5)|not null|
|`comment`|varchar(500)|not null|
|`created_at`|datetime|not null|
|`updated_at`|datetime|not null|
-- insert user example
-- INSERT INTO rarepuppersdbschema_dev.users VALUES (DEFAULT, 'Adam', 'pass', 100);

-- insert dog example
-- INSERT INTO rarepuppersdbschema_dev.dogs VALUES (DEFAULT, 1, 'Pablo', 'pupper');

-- insert card example
-- INSERT INTO rarepuppersdbschema_dev.cards VALUES (DEFAULT, 1, 1, 'Pablo the Pablano', 11, '{"derp", "if it fits i sits", "blep"}', DEFAULT, DEFAULT);

CREATE SCHEMA IF NOT EXISTS rarepuppersdbschema_dev;

CREATE TYPE dogtype AS ENUM ('yapper', 'pupper', 'doggo', 'woofer', 'floofer');

CREATE  TABLE rarepuppersdbschema_dev.users ( 
	"_id"                bigint  NOT NULL GENERATED  ALWAYS AS IDENTITY,
	username             varchar(20)  NOT NULL ,
	passphrase           text DEFAULT 'pass' NOT NULL ,
	money                money DEFAULT 100 NOT NULL ,
	CONSTRAINT pk_users__id PRIMARY KEY ( "_id" )
 );

COMMENT ON COLUMN rarepuppersdbschema_dev.users."_id" IS 'user id';

COMMENT ON COLUMN rarepuppersdbschema_dev.users.username IS 'username';

COMMENT ON COLUMN rarepuppersdbschema_dev.users.passphrase IS 'user password';

COMMENT ON COLUMN rarepuppersdbschema_dev.users.money IS 'user money';

CREATE  TABLE rarepuppersdbschema_dev.dogs ( 
	"_id"                bigint  NOT NULL GENERATED  ALWAYS AS IDENTITY,
	owner_id             bigint  NOT NULL,
	dog_name             text  NOT NULL,
	dog_type             dogtype NOT NULL,
	CONSTRAINT pk_dogs__id PRIMARY KEY ( "_id" ),
	CONSTRAINT Fk_owner_id FOREIGN KEY ( owner_id ) REFERENCES rarepuppersdbschema_dev.users( "_id" )   
 );

COMMENT ON COLUMN rarepuppersdbschema_dev.dogs."_id" IS 'dog id';

COMMENT ON COLUMN rarepuppersdbschema_dev.dogs.dog_name IS 'dog name';

COMMENT ON COLUMN rarepuppersdbschema_dev.dogs.dog_type IS 'dog type';

CREATE  TABLE rarepuppersdbschema_dev.cards ( 
	"_id"                bigint  NOT NULL GENERATED  ALWAYS AS IDENTITY,
	owner_id             bigint  NOT NULL,
	dog_id               bigint  NOT NULL,
	card_name            text  NOT NULL,
	tier                 smallint  NOT NULL,
	attributes           text[]  NOT NULL,
	upvotes              bigint DEFAULT 0 NOT NULL,
	downvotes            bigint DEFAULT 0 NOT NULL,
	CONSTRAINT pk_cards__id PRIMARY KEY ( "_id" ),
	CONSTRAINT Fk_owner_id FOREIGN KEY ( owner_id) REFERENCES rarepuppersdbschema_dev.users( "_id" ),
	CONSTRAINT Fk_dog_id FOREIGN KEY ( dog_id ) REFERENCES rarepuppersdbschema_dev.dogs( "_id" )
 );

COMMENT ON COLUMN rarepuppersdbschema_dev.cards."_id" IS 'card id';

COMMENT ON COLUMN rarepuppersdbschema_dev.cards.owner_id IS 'owner user id';

COMMENT ON COLUMN rarepuppersdbschema_dev.cards.dog_id IS 'dog id';

COMMENT ON COLUMN rarepuppersdbschema_dev.cards.tier IS 'card tier';

COMMENT ON COLUMN rarepuppersdbschema_dev.cards.attributes IS 'dog attributes';



/* Dummy Data */

/* users */
/*
	INSERT INTO rarepuppersdbschema_dev.users VALUES (DEFAULT, 'Adam', 'pass1', 100);
	INSERT INTO rarepuppersdbschema_dev.users VALUES (DEFAULT, 'Mary', 'pass2', 150);
	INSERT INTO rarepuppersdbschema_dev.users VALUES (DEFAULT, 'Lauren', 'pass3', 120);
	INSERT INTO rarepuppersdbschema_dev.users VALUES (DEFAULT, 'John', 'cenaiscool', 1120);
*/

/* dogs */
/*
	INSERT INTO rarepuppersdbschema_dev.dogs VALUES (DEFAULT, 1, 'Pablo', 'pupper');
	INSERT INTO rarepuppersdbschema_dev.dogs VALUES (DEFAULT, 2, 'Coco', 'pupper');
	INSERT INTO rarepuppersdbschema_dev.dogs VALUES (DEFAULT, 3, 'Lady', 'doggo');
	INSERT INTO rarepuppersdbschema_dev.dogs VALUES (DEFAULT, 4, 'Rufus', 'floofer');
	INSERT INTO rarepuppersdbschema_dev.dogs VALUES (DEFAULT, 1, 'Akamaru', 'yapper');
	INSERT INTO rarepuppersdbschema_dev.dogs VALUES (DEFAULT, 2, 'Chico', 'pupper');
*/

/* cards */
/*
	INSERT INTO rarepuppersdbschema_dev.cards VALUES (DEFAULT, 1, 1, 'Pablo the Poblano', 12, '{"derp", "if it fits i sits", "blep"}', DEFAULT, DEFAULT);
	INSERT INTO rarepuppersdbschema_dev.cards VALUES (DEFAULT, 1, 1, 'Pablo the Pirate', 19, '{"derp", "sit", "bamboozled"}', DEFAULT, DEFAULT);
	INSERT INTO rarepuppersdbschema_dev.cards VALUES (DEFAULT, 1, 6, 'Chico the Wizard', 99, '{"derp", "sit", "blep"}', DEFAULT, DEFAULT);
	INSERT INTO rarepuppersdbschema_dev.cards VALUES (DEFAULT, 2, 2, 'Coco the Quick', 17, '{"contains zoomies", "very fast doggo running at incredible high speed"}', DEFAULT, DEFAULT);
	INSERT INTO rarepuppersdbschema_dev.cards VALUES (DEFAULT, 3, 3, 'Lady the Derp', 14, '{"derp", "if it fits i sits", "MOWF"}', DEFAULT, DEFAULT);
	INSERT INTO rarepuppersdbschema_dev.cards VALUES (DEFAULT, 1, 5, 'Headwarmer', 22, '{"sit", "if it fits i sits", "sploot"}', DEFAULT, DEFAULT);
	INSERT INTO rarepuppersdbschema_dev.cards VALUES (DEFAULT, 1, 4, 'Lumbering jack', 13, '{"shoob", "protec", "maximum borkdrive"}', DEFAULT, DEFAULT);
*/

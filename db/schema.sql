CREATE SCHEMA IF NOT EXISTS rarepuppersdbschema;

CREATE  TABLE rarepuppersdbschema.users ( 
	"_id"                bigint  NOT NULL GENERATED ALWAYS AS IDENTITY,
	username             varchar(20)  NOT NULL ,
	passphrase           text DEFAULT 'pass' NOT NULL ,
	money                money DEFAULT 100 NOT NULL ,
	CONSTRAINT pk_users__id PRIMARY KEY ( "_id" )
 );

COMMENT ON COLUMN rarepuppersdbschema.users."_id" IS 'user id';

COMMENT ON COLUMN rarepuppersdbschema.users.username IS 'username';

COMMENT ON COLUMN rarepuppersdbschema.users.passphrase IS 'user password';

COMMENT ON COLUMN rarepuppersdbschema.users.money IS 'user money';

CREATE  TABLE rarepuppersdbschema.cards ( 
	"_id"                bigint  NOT NULL GENERATED ALWAYS AS IDENTITY,
	owner_id             bigint  NOT NULL ,
	tier                 smallint  NOT NULL ,
	dogtype              text  NOT NULL ,
	attributes           text[]  NOT NULL ,
	upvotes              bigint DEFAULT 0 NOT NULL ,
	downvotes            bigint DEFAULT 0 NOT NULL ,
	CONSTRAINT pk_cards__id PRIMARY KEY ( "_id" )
 );

COMMENT ON COLUMN rarepuppersdbschema.cards."_id" IS 'card id';

COMMENT ON COLUMN rarepuppersdbschema.cards.owner_id IS 'owner user_id';

COMMENT ON COLUMN rarepuppersdbschema.cards.tier IS 'card tier';

COMMENT ON COLUMN rarepuppersdbschema.cards.dogtype IS 'dog type';

COMMENT ON COLUMN rarepuppersdbschema.cards.attributes IS 'dog attributes';

ALTER TABLE rarepuppersdbschema.cards ADD CONSTRAINT fk_owner_id FOREIGN KEY ( owner_id ) REFERENCES rarepuppersdbschema.users( "_id" );

-- insert user example
-- INSERT INTO rarepuppersdbschema.users VALUES (DEFAULT, 'Adam', 'pass', 100)

-- insert card example
-- INSERT INTO rarepuppersdbschema.cards VALUES (DEFAULT, 1, 10, 'pupper', '{"supreme cuddler", "lick monster", "hand shaker"}', DEFAULT, DEFAULT)
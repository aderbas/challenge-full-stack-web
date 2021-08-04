-- Initial database

-- UUID dependency extension solution by: https://stackoverflow.com/a/12505220/704099
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table users
CREATE TABLE challenge_user (
  user_uuid uuid DEFAULT uuid_generate_v4() NOT NULL,
  user_name varchar(250)  NOT NULL,
  user_email varchar(250)  NOT NULL,
  user_password varchar(32)  NOT NULL,
  user_created timestamp DEFAULT now(),
  user_lastaccess timestamp
);

ALTER TABLE challenge_user ADD CONSTRAINT unique_email_constraint UNIQUE (user_email);

-- Add default user
INSERT INTO challenge_user (user_name, user_email, user_password) VALUES ('Admin', 'admin@email.com', md5('123456'));

-- Table students
CREATE TABLE challenge_student (
  student_uuid uuid DEFAULT uuid_generate_v4() NOT NULL,
  student_name varchar(250)  NOT NULL,
  student_email varchar(250)  NOT NULL,
  student_ra varchar(250)  NOT NULL,
  student_cpf varchar(11)  NOT NULL,
  student_created timestamp DEFAULT now()
);

ALTER TABLE challenge_student ADD CONSTRAINT unique_ra_constraint UNIQUE (student_ra);
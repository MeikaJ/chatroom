-- DROP DATABASE If EXISTS 'volunteer_tracker';
create database volunteer_tracker;
use volunteer_tracker;


CREATE TABLE tracker (
    name varchar(30),
    location varchar(30),
    hrs_wrkd int not null
);


insert into tracker (name, location, hrs_wrkd)
values ("dave", "redmond", "4");


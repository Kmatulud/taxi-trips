create table route(
    id serial not null primary key,
    name text not null,
    fare decimal (10,2)
);
create table taxi(
    id serial not null primary key,
    reg_number text not null,
);
create table trip(
    id serial not null primary key,
    trips int not null
);
create table region(
    id serial not null primary key,
    name text not null
);

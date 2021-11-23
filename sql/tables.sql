create table route(
    route_id serial not null primary key,
    route_name text not null,
    fare decimal (10,2)
    ref_route INT,
    FOREIGN KEY(ref_town) REFERENCES trip(trip_id)
);
create table taxi(
    taxi_id serial not null primary key,
    reg_number text not null,
    ref_taxi INT,
    FOREIGN KEY(ref_taxi) REFERENCES trip(trip_id)
);
create table trip(
    trip_id serial not null primary key,
    trips int not null
);
create table region(
    region_id serial not null primary key,
    region_name text not null
);

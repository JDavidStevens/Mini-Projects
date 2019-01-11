Create table event(
    id serial primary key,
    title varchar(50),
    description varchar(500),
    date varchar(25),
    time varchar(10),
    location varchar(100),
    price decimal(5,2),
    image text
)

Create table attendance(
    id serial primary key,
    first_name varchar(20),
    last_name varchar(30),
    email varchar(75),
    phone varchar(15),
    class_id int references event(id)
)
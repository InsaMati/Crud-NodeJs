-- creando base de datos

CREATE DATABASE crudnodejsmysql;

use crudnodejsmysql;

create table customer(
    id int(6) IDENTITY(1,1) PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);


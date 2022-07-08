
conn = new Mongo("localhost");

db = conn.getDB("pizzeria");

db.dropDatabase();

db.createCollection("invoice");
db.createCollection("client");
db.createCollection("employee");

db.client.insert({ 
_id: 001,
    name: "Pere",
    last_name: "Coll",
    phone_number: "+34987788585",
    address: "carrer dos, 14, 1º, 3ª",
    town: {
        name: "calafell",
        cp: "43882",
        province:{
            name: "Tarragona",
        }
}});
db.client.insert({ 
    _id: 002,
    name: "Noa",
    last_name: "Navarro",
    phone_number: "+34987784375",
    address: "carrer tres, 5, 8º, 1ª",
    town: {
        name: "calafell",
        cp: "43882",
        province:{
            name: "Tarragona",
        }
    }
});

db.employee.insert({
    _id: 001,
    name: "Jordi",
    last_name: "Casals",
    NIF: "89654858V",
    phone_number: "+34897587878",
    job: "repartidor",
    store: {
        address: "carrer u, 15, baix",
        town: {
            name: "calafell",
            cp: "43882",
            province:{
                name: "Tarragona",
            }
        }
    }
});

db.employee.insert({
    _id: 002,
    name: "Celia",
    last_name: "Casals",
    NIF: "898754858V",
    phone_number: "+34898787878",
    job: "cuiner",
    store: {
        address: "carrer quatre, 3, baix",
        town: {
            name: "cunit",
            cp: "43885",
            province:{
                name: "Tarragona",
            }
        }
    }
});

db.invoice.insert({name: "INV_0001", date: new Date("2020-03-05"), total: 55, delivery_method: "Domicili",
employee_who_delivers: {
    delivery_date_time: ISODate("2020-03-05T05:35:00Z"),
    employee: {
        name: "Jordi",
        last_name: "Casals",
        NIF: "89654858V",
        phone_number: "+34897587878",
        job: "repartidor",
        store: {
            address: "carrer u, 15, baix",
            town: {
                name: "calafell",
                cp: "43882",
                province:{
                    name: "Tarragona",
                }
            }
        }
    }
},
client: {
    name: "Pere",
    last_name: "Coll",
    phone_number: "+34987788585",
    address: "carrer dos, 14, 1º, 3ª",
    town: {
        name: "calafell",
        cp: "43882",
        province:{
            name: "Tarragona",
        }
    }
},
order: {
    beverage: {
        name: "Cola",
        description: "llauna 33cl",
        image: "c:\\system\\path",
        price: 2.50,
        quantity: 3,
    },
    burger:{
        name: "doble de pollastre",
        description: "pollastre, formatge...",
        price: 6.50,
        quantity: 1,
    },
    pizza:[
        {
        name: "carbonara",
        description: "carbonara de gener",
        image: "c:\\system\\path",
        price: 16.00,
        quantity: 2,
        pizza_category: {
            description: "Gener",
        },
        },
        {
        name: "Margherita",
        description: "Margherita de gener",
        image: "c:\\system\\path",
        price: 12.00,
        quantity: 1,
        pizza_category: {
            description: "Gener",
        },
     }]
}
});

db.invoice.insert({name: "INV_0002", date: new Date("2022-08-03"), total: 34, delivery_method: "Recollir",
store: {
    address: "carrer u, 15, baix",
    town: {
        name: "calafell",
        cp: "43882",
        province:{
            name: "Tarragona",
        }
    }
},
client: {
    name: "Noa",
    last_name: "Navarro",
    phone_number: "+34987784375",
    address: "carrer tres, 5, 8º, 1ª",
    town: {
        name: "calafell",
        cp: "43882",
        province:{
            name: "Tarragona",
        }
    }
},
order: {
    beverage: {
        name: "Cervesa",
        description: "ampolla 33cl",
        image: "c:\\system\\path",
        price: 2.50,
        quantity: 2,
    },
    burger:[{
        name: "simple",
        description: "formatge...",
        price: 5.00,
        quantity: 1,
    },
    {
        name: "suprema",
        description: "special...",
        price: 8.00,
        quantity: 1,
    }
],
    pizza:
        {
        name: "carbonara",
        description: "carbonara de gener",
        image: "c:\\system\\path",
        price: 16.00,
        quantity: 1,
        pizza_category: {
            description: "Gener",
        },
        },
}
});
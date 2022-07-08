
conn = new Mongo("localhost");

db = conn.getDB("culdampolla");

db.dropDatabase();

db.createCollection("invoice");

db.invoice.insert({name: "INV_0001", date: new Date("2020-03-05"), total: 350, 
client: {
    name: "Pere",
    phone_number: "+34987788585",
    email: "pere@pere.com",
    registration_date: new Date("2020-03-05"),
},
order: {
    subtotal: 350,
    glasses: {
        branch: "Ray-Ban",
        frame_type: "flotant",
        frame_color: "vermell",
        glass_color: "fosques",
        price: 125,
        quantity: 1,
        supplier: {
            name: "Gafax",
            phone_number: "+34659884598",
            fax_number: "+34659884590",
            NIF: "63845612X",
            address:{
                street: "carrer sosa",
                number: "15",
                floor: "bajo",
                city: "New York",
                cp: "358783",
                country: "EEUU",
            }
        }
    },
    glasses: {
        branch: "Polaroid",
        frame_type: "pasta",
        frame_color: "verd",
        glass_color: "transparent",
        price: 225,
        quantity: 1,
        supplier: {
            name: "Compres Petit",
            phone_number: "+34654564598",
            fax_number: "+346598843560",
            NIF: "56845612M",
            address:{
                street: "carrer aprop",
                number: "89",
                floor: "bajo",
                city: "New York",
                cp: "358783",
                country: "EEUU",
            }
        }
    },
},
employee: {
    name: "Tony",
    employee_number: 1,
}}) ;

db.invoice.insert({name: "INV_0002", date: new Date("2022-05-01"), total: 175, 
client: {
    name: "Carla",
    phone_number: "+34987848563",
    email: "carla@carla.com",
    registration_date: new Date("2022-05-01"),
    refecenced_by: {
        client: {
            name: "Pere",
            phone_number: "+34987788585",
            email: "pere@pere.com",
            registration_date: new Date("2020-03-05"),
        }
    }
},
order: {
    subtotal: 175,
    glasses: {
        branch: "Ray-Ban",
        frame_type: "metàl·lica",
        frame_color: "negre",
        glass_color: "transparent",
        price: 175,
        quantity: 1,
        supplier: {
            name: "Provee To",
            phone_number: "+34659689598",
            fax_number: "+346598845368",
            NIF: "78945612N",
            address:{
                street: "carrer finte",
                number: "08",
                floor: "bajo",
                city: "New York",
                cp: "358783",
                country: "EEUU",
            }
        }
    },
},
employee: {
    name: "Nerea",
    employee_number: 2,
}}) ;
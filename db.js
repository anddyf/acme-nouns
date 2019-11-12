const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost/acmenotes');

const people = db.define('people', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

const places = db.define('places', {
    city: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

const thingy = db.define('thingy', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    color: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

const seed = async() => {
   const peopleToBe = [
       {
        firstName: 'Billy ',
        lastName: 'Joel'
       },
       {
        firstName: 'SHAQ',
        lastName: 'Neal'
       }
   ]

   const [billy, shaq] =  await Promise.all( peopleToBe.map( person => people.create(person)))
   

   const placesToBe = [
    {
     city: 'Long Island',
     state: 'New York'
    },
    {
     city: 'Orlando',
     state: 'Florida'
    }
]

const [longi, orlandof] =  await Promise.all( placesToBe.map( city => places.create(city)))

const thingToBe = [
    {
     name: 'piano',
     color: 'black'
    },
    {
     name: 'basketball',
     color: 'orange'
    }
]

const [pianoB, blackBall] =  await Promise.all( thingToBe.map( thing => thingy.create(thing))) 

}

module.exports = {
    seed,
    people,
    places,
    thingy,
    db
}
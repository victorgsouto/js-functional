"use strict";

class IsDog {
    constructor() { }

    dogs(animals) {
        return animals.filter((animal) => {
            return animal.species === 'dog';
        });
    }
}

var animals = [
    { name: 'Caro', species: 'rabbit' },
    { name: 'Jimmy', species: 'dog' },
    { name: 'Harold', species: 'dog' },
    { name: 'Ursula', species: 'fish' },
    { name: 'Nem', species: 'cat' },
    { name: 'Din', species: 'cat' },
]

var test = new IsDog();

// console.log(test.dogs(animals));

// let isDog = (animal) => {
//     return animal.species === 'dog';
// }
// let dogs = animals.filter(isDog);



/* Result */
// [{ name: 'Jimmy', species: 'dog' }, { name: 'Harold', species: 'dog' }]



/*************** 
	Other method 
****************/
/* 
let dogs = []
for (let i = 0; i < animals.length; i++) {
	if(animals[i].species === 'dog') 
		dogs.push(animals[i])
}
*/

let animals = [
    { name: 'Caro', species: 'rabbit' },
    { name: 'Jimmy', species: 'dog' },
    { name: 'Harold', species: 'dog' },
    { name: 'Ursula', species: 'fish' },
    { name: 'Nem', species: 'cat' },
    { name: 'Din', species: 'cat' },
]

let names = animals.map((animal) => animal.name);
/* Result */
// ["Caro", "Jimmy", "Harold", "Ursula", "Nem", "Din"]

let namesAndSpecies = animals.map((animal) => `${animal.name} is a ${animal.species}`);
/* Result */
// ["Caro is a rabbit", "Jimmy is a dog", "Harold is a dog", "Ursula is a fish", "Nem is a cat", "Din is a cat"]


/*************** 
	Other method 
****************/
/* 
let names = []
for (let i = 0; i < animals.length; i++) {
		names.push(animals[i].name)
}
*/

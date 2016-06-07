var dragon = 
	name => 
	size => 
	element => 
		name + ' is a ' +
		size + ' dragon that breathes' +
		element + "!"

var fluffykins = dragon("fluffykins")("tiny")("lightning");
console.log(fluffykins);				

//Normal func
let dragon = (name, size, element) => 
	name + ' is a ' +
	size + ' dragon that breathes' +
	element + "!"

console.log(dragon("fluffykins", "tiny", "lightning"));

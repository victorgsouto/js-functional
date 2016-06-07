var dragon = 
	name => 
	size => 
	element => 
		name + ' is a ' +
		size + ' dragon that breathes' +
		element + "!"

var fluffykins = dragon("fluffykins")("tiny")("lightning");
//Result
//fluffykins is a tiny dragon that breatheslightning!


//Normal func
var dragon = (name, size, element) => 
	name + ' is a ' +
	size + ' dragon that breathes' +
	element + "!"

console.log(dragon("fluffykins", "tiny", "lightning"));
//Result
//fluffykins is a tiny dragon that breatheslightning!


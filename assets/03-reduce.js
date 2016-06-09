var orders = [
	{ amount: 250 },
	{ amount: 400 },
	{ amount: 100 },
	{ amount: 325 },
]

var totalAmount = orders.reduce((sum, order) => {
	return sum + order.amount
}, 0)

//Result
//1075


/*************** 
	Other method 
****************/
/*
var totalAmount = 0;
for (var i = 0; i < orders.length; i++) {
	totalAmount += orders[i].amount
}

*/
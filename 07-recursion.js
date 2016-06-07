var categories = [
  { id: 'animals', parent: null }, 
  { id: 'mammals', parent: 'animals' }, 
  { id: 'cats', parent: 'mammals' }, 
  { id: 'dogs', parent: 'mammals' }, 
  { id: 'chihuahua', parent: 'dogs' }, 
  { id: 'labrador', parent: 'dogs' }, 
  { id: 'persian', parent: 'cats' }, 
  { id: 'siamese', parent: 'cats' }
]

var makeTree = function(categories, parent) {
  var node = {}
  categories
    .filter(function(c) {
      return c.parent === parent
    })
    .forEach(function(c) {
      return node[c.id] = makeTree(categories, c.id)
    })
  return node;
}
console.log(
  JSON.stringify(
    makeTree(categories, null), null, 2)
)

// {
// 	animals: {
// 		mamals: {
// 			dogs: {
// 				'chihuahua': null,
// 				'labrador': null
// 			},
// 			cats: {
// 				'persian': null,
// 				'siamese': null
// 			}
// 		}
// 	}
// }



var countDownFrom = (num) => {
	if(num === 0) return;
	console.log(num);
	countDownFrom(num -1)
}

countDownFrom(10);

//Result
//10
//9
//8
//7
//6
//5
//4
//3
//2
//1
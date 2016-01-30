//Primitive values (structure)

//Number    - 0 1 2 3 0.15 0.18 -7
//Boolean   - true / false
//Null      - null
//Undefined - undefined
//String    - 'asdasd', "asd2131", '"asda\'s' "'asda\"asd'

//Number (NaN, Infinity, -Infinity)
var a = 10;
a = 2 + 2;
a += 2; // a = a + 2;
a /= 3; // a = a / 3;
a++;    // a = a + 1;
a--;    // a = a - 1;

//Boolean
a = false; // a = 1 == 2;
a = true;  // a = 1 == 1;

//String
var name   = 'Vika';
var name2  = 'Valera';
var result = 'love';

console.log(name + " " + name2 + " " + result);

//Parse
console.log('10' + 10);
console.log('10' + true);
console.log('asd' + 2 * 5);

var result = 2 * 2 + 16 / 3.7 + 18 /17;
console.log('Result:' + result);
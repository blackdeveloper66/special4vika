var a = { key : 10 };
a.log = function() {
    console.log(a.key + 20);
};

console.log(a.key); // 10
a.log();            // 30

var b = a;
b.key = 50;
console.log(a.key); // 50

a.key = 71;
console.log(b.key);  // 71

console.log(a == b); // true

var q = { k : 1 };
var w = { k : 1 };

console.log(q == w); //false
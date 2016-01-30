var a, b;

a = 10; // Оператор присвоения

//Number
a = 10 + 2; // + - / *

a = b = 10;
a = 10;
a++;    // inc 10
a = 10;
++a;    // 11

a = 10;
a--;    // dec 10
a = 10;
--a;    // dec 9

a = (10 + 2) * 2 / 18;

//Boolean
/*
   a   b   result
&  t   t   t
&  t   f   f
&  f   t   f
&  f   f   f
=================
|  t   t   t
|  t   f   t
|  f   t   t
|  f   f   f
*/
var a = true;
a = false | a; // true
a = false & a; // false

//Ленивые операторы
var a = true;
a = false || a; // true
a = false && a; // false

var c = true;
var d = false;

var e = c || (d = true);
console.log('Operators');
console.log(d);
console.log('====================================');

//Сравнение
console.log('Equals');
console.log(1 == 1);    // true
console.log(1 == 2);    // false
console.log('1' == 1);  // true
console.log('1' === 1); // false

console.log(1 != 1);    // false
console.log(1 != 2);    // true
console.log('1' != 1);  // false
console.log('1' !== 1); // true
console.log('====================================');

//||
console.log('||');
console.log('Vika' || 10);
console.log(null || 11);
console.log(undefined || 12);
console.log(8 || 13);
console.log('====================================');

// (условие) ? 'значение если условие правда' : 'значение если условие не-правда'
console.log('?');

console.log(true ? 1 : 2);
console.log(false ? 3 : 4);
console.log('asdas' ? 5 : 6);
console.log(0 ? 7 : 8);
console.log(null ? 9 : 10);
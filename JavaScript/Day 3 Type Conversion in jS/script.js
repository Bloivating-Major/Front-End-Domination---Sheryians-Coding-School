// // "4" + 2;

// // // in js the + operator has two different meanings
// // // 1. addition
// // // 2. concatenation

// // // when we use + operator with two numbers it performs addition
// // console.log(4 + 2); // 6

// // // when we use + operator with two strings it performs concatenation
// // console.log("4" + 3); // "43"

// // let num = "8";

// // let result = 4 + (++num);

// // console.log(result); // 13


// // // objects type conversion automatic.

// // // let obj = {name: "Sam", age: 21};

// // console.log(obj + ''); // [Object, Object]

// // // let arr = [1,2,3, [4, [5, 6, [7, 8]]]];

// // // // console.log(arr + "");

// // // // when you try to convert an array into any string type
// // // // it will remove the square brackets

// // // // "1,2,3"

// // // // single element
// // // let num = [5];
// // // num = []
// // // console.log(+num); // 5
// // // console.log(Number(num))

// // // let num2 = [4,5,6];
// // // console.log(Number(num2));

// // // For String Conversion
// let obj = {
//     toString(){
//         console.log("toString Called");
//         return "string representation";
//     },
//     valueOf(){
//         console.log("valueOf Called");
//         return 100;
//     }
// }

// // String Conversion
// console.log(obj + "!");

// console.log(+obj);

// // Both are valid operator usage
// console.log(typeof 42);        // "number"
// console.log(typeof(42));       // "number"

// // Parentheses help with expressions
// var data = 100;
// typeof data + ' Bye';          // returns 'number Bye'
// typeof (data + 'Bye');         // returns 'string'

// // Type checking in functions
// function multiply(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         throw 'Arguments must be numbers';
//     }
//     return x * y;
// }

// // Conditional logic based on type
// let value = getData();
// if (typeof value === 'string') {
//     console.log('Processing string:', value);
// } else if (typeof value === 'number') {
//     console.log('Processing number:', value);
// }

// // This has been true since JavaScript's beginning
// typeof null === 'object';  // true (unfortunately!)

// // ❌ Don't do this
// if (typeof value === 'object') {
//     // This catches null, arrays, objects, etc.
// }

// // ✅ Do this instead
// if (value === null) {
//     console.log('Value is null');
// }

// // ✅ Or check for null specifically
// if (value !== null && typeof value === 'object') {
//     console.log('Value is actually an object (not null)');
// }

// // ✅ More robust object checking
// function isRealObject(value) {
//     return value !== null && typeof value === 'object' && !Array.isArray(value);
// }

// // More precise type checking
// Object.prototype.toString.call(null);      // "[object Null]"
// Object.prototype.toString.call({});        // "[object Object]"
// Object.prototype.toString.call([]);        // "[object Array]"

// // Modern approaches
// Array.isArray([]);     // true
// Number.isNaN(NaN);     // true

// let arr = [1, 2, 3];
// console.log(arr + "");        // "1,2,3"
// console.log(String(arr));     // "1,2,3"

// let emptyArr = [];
// console.log(emptyArr + "");   // "" (empty string)

// let nestedArr = [1, [2, 3], 4];
// console.log(nestedArr + "");  // "1,2,3,4"


// let arr = [10];
// console.log(+arr);           // 5 (single element converts to that number)
// console.log(Number(arr));    // 5

// let emptyArr = [];
// console.log(+emptyArr);      // 0 (empty array converts to 0)

// let multiArr = [1, 2];
// console.log(+multiArr);      // NaN (multiple elements = NaN)


// console.log(Boolean([]));     // true
// console.log(Boolean([1,2]));  // true

// if ([]) {
//     console.log("Empty array is truthy!"); // This runs
// }

// let obj = {name: "John", age: 25};
// console.log(obj + "");        // "[object Object]"
// console.log(String(obj));     // "[object Object]"

// // Custom toString method
// let customObj = {
//     name: "John",
//     toString() {
//         return this.name;
//     }
// };
// console.log(customObj + "");  // "John"

// let obj = {};
// console.log(+obj);           // NaN
// console.log(Number(obj));    // NaN

// // Custom valueOf method
// let customObj = {
//     value: 42,
//     valueOf() {
//         return this.value;
//     }
// };
// console.log(+customObj);     // 42

// let obj = {
//     toString() {
//         console.log("toString called");
//         return "string representation";
//     },
//     valueOf() {
//         console.log("valueOf called");
//         return 100;
//     }
// };

// // String context - toString first
// console.log(obj + "!");
// // Output: "toString called"
// //         "string representation!"

// // Number context - valueOf first  
// console.log(+obj);
// // Output: "valueOf called"  
// //         100

// [] + [];          // "" (both arrays become empty strings)
// [] + {};          // "[object Object]" 
// {} + [];          // 0 (first {} parsed as code block)
// [1] + [12];        // "12" (string concatenation)
// [1] * [12];        // 2 (both convert to numbers: 1 * 2)

// // All objects/arrays are truthy in boolean context
// if ([]) console.log("truthy");     // runs
// if ({}) console.log("truthy");     // runs
// if ([0]) console.log("truthy");    // runs (even with falsy content)

// // ❌ Problematic - automatic conversion
// let result = [1, 2] + [3, 4];  // "1,23,4" (probably not intended)

// // ✅ Better - explicit conversion
// let result = [1, 2].concat([3, 4]);  // [1, 2, 3, 4]

// // ❌ Problematic - loose equality  
// [] == 0;  // true

// // ✅ Better - strict equality
// [] === 0;  // false

// // Instead of relying on automatic conversion
// if (array.length) { /* ... */ }

// // Be explicit about your intent  
// if (array.length > 0) { /* ... */ }

// String(123);        // "123"
// String(true);       // "true"
// String(null);       // "null"
// String(undefined);  // "undefined"
// String([1,2,3]);    // "1,2,3"
// String({});         // "[object Object]"

// (123).toString();     // "123"
// true.toString();      // "true"
// [1,2,3].toString();   // "1,2,3"

// // With radix parameter for numbers
// (255).toString(16);   // "ff" (hexadecimal)
// (8).toString(2);      // "1000" (binary)

// // ❌ Won't work with null/undefined
// // null.toString();   // TypeError

// let num = 42;
// let result = `${num}`;  // "42"
// let bool = `${true}`;   // "true"

// Number("123");      // 123
// Number("12.34");    // 12.34
// Number(true);       // 1
// Number(false);      // 0
// Number(null);       // 0
// Number(undefined);  // NaN
// Number("");         // 0
// Number("  ");       // 0
// Number("123abc");   // NaN

// parseInt("123");        // 123
// parseInt("123.45");     // 123 (ignores decimal part)
// parseInt("123abc");     // 123 (stops at 'a')
// parseInt("abc123");     // NaN (starts with non-digit)

// // With radix parameter
// parseInt("FF", 16);     // 255 (hexadecimal)
// parseInt("1010", 2);    // 10 (binary)
// parseInt("777", 8);     // 511 (octal)

// +"123";       // 123
// +"12.34";     // 12.34  
// +true;        // 1
// +false;       // 0
// +"";          // 0
// +"123abc";    // NaN

// Boolean(1);           // true
// Boolean(0);           // false
// Boolean("");          // false
// Boolean("hello");     // true
// Boolean(null);        // false
// Boolean(undefined);   // false
// Boolean([]);          // true (empty array is truthy!)
// Boolean({});          // true (empty object is truthy!)

// !!1;           // true
// !!0;           // false
// !!"hello";     // true
// !!"";          // false
// !![];          // true
// !!null;        // false

// Boolean("0");      // true (string "0")
// Boolean(" ");      // true (space string)
// Boolean([]);       // true (empty array)
// Boolean({});       // true (empty object)
// Boolean(-1);       // true (negative numbers)

// let str = "hello";
// console.log(str.toUpperCase());  // "HELLO"

// // Behind the scenes:
// // 1. new String("hello") - temporary wrapper created
// // 2. wrapper.toUpperCase() - method called
// // 3. wrapper discarded

// // Primitive values
// let str = "hello";           // string primitive
// let num = 42;                // number primitive  
// let bool = true;             // boolean primitive

// // Wrapper objects (avoid creating these explicitly)
// let strObj = new String("hello");    // String object
// let numObj = new Number(42);         // Number object
// let boolObj = new Boolean(true);     // Boolean object

// console.log(typeof str);     // "string"
// console.log(typeof strObj);  // "object"

// let primitive = "JavaScript";

// // These work because of automatic boxing:
// console.log(primitive.length);        // 10
// console.log(primitive.charAt(0));     // "J"
// console.log(primitive.slice(0, 4));   // "Java"

// // You can't add properties to primitives:
// primitive.customProp = "test";
// console.log(primitive.customProp);    // undefined (boxing discards changes)

// let strObj = new String("hello");
// let primitive = strObj.valueOf();    // "hello" (primitive)
// let alsoPrimitive = strObj + "";     // "hello" (primitive)

// console.log(typeof primitive);       // "string"

// // ✅ Preferred - works with all values
// String(value);

// // ✅ Good - but check for null/undefined first  
// value?.toString();

// // ✅ Modern approach
// `${value}`;

// // ✅ For complete conversion
// Number(value);

// // ✅ For integers from strings
// parseInt(value, 10);  // Always specify radix

// // ✅ For floats from strings  
// parseFloat(value);

// // ✅ Quick conversion (be careful with edge cases)
// +value;

// // ✅ Explicit and clear
// Boolean(value);


// // ✅ For conditional checks
// if (value) { /* truthy check */ }

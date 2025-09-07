- Number Data Type

-- Decimal and Floating Point are same in JS

- But if you write a floating point number in js then it can be converted to decimal also.

- Number("10.5") => 10.5 - this will cast the string to floating point number
- parseInt("10.5") => 10 - this will cast the string to integer
- parseFloat("10.5") => 10.5 - this will cast the string to floating point number
- Number("10") => 10 - this will cast the string to integer
- Math.floor(10.5) => 10 - this will convert the floating point number to integer by removing the decimal part
- Math.ceil(10.5) => 11 - this will convert the floating point number to integer by rounding off the decimal part
- Math.round(10.5) => 11 - this will convert the floating point number to integer by rounding off the decimal part

```javascript

// Example
let num = 23.5;
let num2 = 1.1;

console.log("Normal Console " , num); //23.2

console.log("Number " , Number(num));
console.log("parseInt " , parseInt(num));

let str = "55.55";

console.log("String to Number " , Number(str));
console.log("String to parseInt " , parseInt(str));

console.log(Math.floor(num));
console.log(Math.ceil(num2));
console.log(Math.round(num))
```

-- Max Range in Number Data Type
- Number.MAX_SAFE_INTEGER => 9007199254740991
- Number.MIN_SAFE_INTEGER => -9007199254740991

- To overcome this limitation we have BIGINT Data Type
-- Creation of BigInt Data Type
let num = BigInt(1234567890123456789012345678901234567890);

also you cannot add bigint and number data types
let a = 1;
let b = 2n;
console.log(a+b); // this will give error

- String Data Type
- Used with single as well as double quotes
- Here we also have template literals using backticks ``
- Template literals allow us to embed expressions inside string using ${expression}

- Boolean Data Type
- true and false

- Symbol Data Type
- Used to create unique identifiers
- Used to private keys in a object.

- Creation of Symbol Data Type
```javascript
Symbol() === Symbol() // false
let obj = {};

obj.name = "Sambhav"; // this is public key

console.log(obj.name); // Sambhav

let sym = Symbol("name");
obj[sym] = "Sambhav"; // this is private key

console.log(obj[sym]); // Sambhav
console.log(obj); // { name: 'Sambhav', [Symbol(name)]: 'Sambhav' }
console.log(Object.keys(obj)); // [ 'name' ]

```

```javascript
// Why we need symbol and what was the drawback of Object

const obj = {};

function getData(param){
    param.getAllAccess = function(){
        console.log("You have been hacked");
    };
    return ["Neha", "Riya", "Vrushali","Pratiksha", "Pranita"];
}

getData(obj);

Object.keys(obj).forEach((key)=>{
    console.log(key);
    obj[key]();
});
```

- Object Data Type

- Used to store multiple values in a single variable
- Creation of Object Data Type
```javascript

let obj = {
    name: "Sambhav",
    age: 20,
    isStudent: true
};

console.log(obj.name); // Sambhav
console.log(obj["age"]); // 20

// creating dynamic keys

let keyName = 'salary';
obj[keyName] = 50000;

console.log(obj.salary); // 50000

```

- Objects Works on Reference Basis.

// tricky example

```javascript

let obj = {
    name : "Sambhav"
}

function abc(obj){
    let num = obj;
    num = 200;
    console.log(num); 
}

abc(obj);
console.log(obj); 
```


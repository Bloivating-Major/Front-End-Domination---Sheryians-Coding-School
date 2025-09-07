# 🔢 JavaScript Data Types – Day 2 Deep Dive

Welcome to your journey into JavaScript data types!  
Explore numbers, strings, booleans, symbols, objects, and more with creative examples and practical code snippets.

---

## 1️⃣ Number Data Type

- **Decimal and Floating Point:**  
  Both are treated the same in JS.
- **Type Casting Examples:**
  ```js
  Number("10.5")      // 10.5 (string to float)
  parseInt("10.5")    // 10   (string to integer)
  parseFloat("10.5")  // 10.5 (string to float)
  Number("10")        // 10   (string to integer)
  Math.floor(10.5)    // 10   (round down)
  Math.ceil(10.5)     // 11   (round up)
  Math.round(10.5)    // 11   (nearest integer)
  ```

- **Code Example:**
  ```js
  let num = 23.5;
  let num2 = 1.1;
  let str = "55.55";

  console.log("Normal Console:", num); // 23.5
  console.log("Number:", Number(num)); // 23.5
  console.log("parseInt:", parseInt(num)); // 23
  console.log("String to Number:", Number(str)); // 55.55
  console.log("String to parseInt:", parseInt(str)); // 55
  console.log("Math.floor:", Math.floor(num)); // 23
  console.log("Math.ceil:", Math.ceil(num2)); // 2
  console.log("Math.round:", Math.round(num)); // 24
  ```

- **Max Range:**
  ```js
  Number.MAX_SAFE_INTEGER      // 9007199254740991
  Number.MIN_SAFE_INTEGER      // -9007199254740991
  ```

- **BigInt Data Type:**
  ```js
  let bigNum = BigInt(1234567890123456789012345678901234567890);
  // Cannot mix BigInt and Number
  let a = 1;
  let b = 2n;
  // console.log(a + b); // Error!
  ```

---

## 2️⃣ String Data Type

- **Usage:** Single, double quotes, or backticks (template literals).
- **Template Literals Example:**
  ```js
  let name = "Sambhav";
  let age = 20;
  let intro = `My name is ${name} and I am ${age} years old.`;
  console.log(intro);
  ```

---

## 3️⃣ Boolean Data Type

- **Values:** `true` and `false`
  ```js
  let isStudent = true;
  let isAdmin = false;
  ```

---

## 4️⃣ Symbol Data Type

- **Purpose:** Unique identifiers, private keys in objects.
- **Creation & Usage:**
  ```js
  Symbol() === Symbol() // false

  let obj = {};
  obj.name = "Sambhav"; // public key

  let sym = Symbol("secret");
  obj[sym] = "Hidden Value"; // private key

  console.log(obj.name);     // Sambhav
  console.log(obj[sym]);     // Hidden Value
  console.log(obj);          // { name: 'Sambhav', [Symbol(secret)]: 'Hidden Value' }
  console.log(Object.keys(obj)); // [ 'name' ]
  ```

- **Why Symbol? Drawback of Object:**
  ```js
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
  // Symbol prevents accidental access to private keys!
  ```

---

## 5️⃣ Object Data Type

- **Purpose:** Store multiple values in a single variable.
- **Creation:**
  ```js
  let obj = {
      name: "Sambhav",
      age: 20,
      isStudent: true
  };

  console.log(obj.name);      // Sambhav
  console.log(obj["age"]);    // 20

  // Dynamic keys
  let keyName = 'salary';
  obj[keyName] = 50000;
  console.log(obj.salary);    // 50000
  ```

- **Objects Work on Reference Basis:**
  ```js
  let obj1 = { name: "Sambhav" };
  let obj2 = obj1;
  obj2.name = "Neha";
  console.log(obj1.name); // Neha (both point to same object)
  ```

- **Tricky Example:**
  ```js
  let obj = {
      name : "Sambhav"
  }

  function abc(obj){
      let num = obj;
      num = 200;
      console.log(num); // 200
  }

  abc(obj);
  console.log(obj); // { name: "Sambhav" }
  // Changing 'num' doesn't affect original object, because 'num' is reassigned to a primitive.
  ```

- **Another Reference Example:**
  ```js
  let objA = { value: 10 };
  let objB = objA;
  objB.value = 20;
  console.log(objA.value); // 20
  ```

- **Copying Objects (Shallow Copy):**
  ```js
  let original = { name: "Sam", age: 21 };
  let copy = { ...original };
  copy.name = "Neha";
  console.log(original.name); // Sam
  console.log(copy.name);     // Neha
  ```

---

## 6️⃣ Array Data Type

- **Arrays can hold multiple types:**
  ```js
  let arr = [1, "Sam", true, { age: 20 }, [2,3]];
  console.log(arr[3].age); // 20
  ```

---

> **Tip:**  
> Practice with these examples, experiment with data types, and understand how references work in JavaScript
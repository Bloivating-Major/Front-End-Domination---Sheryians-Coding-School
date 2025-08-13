const data = {
    "users": [
        {
            "id": 1,
            "name": "John Doe",
            "email": "john@example.com",
            "age": 28,
            "address": {
                "street": "123 Main St",
                "city": "New York",
                "country": "USA"
            },
            "hobbies": ["reading", "gaming", "hiking"]
        },
        {
            "id": 2,
            "name": "Jane Smith",
            "email": "jane@example.com",
            "age": 24,
            "address": {
                "street": "456 Park Ave",
                "city": "Los Angeles",
                "country": "USA"
            },
            "hobbies": ["painting", "photography", "traveling"]
        }
    ],
    "settings": {
        "theme": "dark",
        "notifications": true,
        "language": "en"
    },
    "version": "1.0.0"
};

// You can access the data like this:
console.log(data.users[0].name); // Output: John Doe
console.log(data.settings.theme); // Output: dark


// JSON.stringify() converts a JavaScript object into a JSON string
const jsonString = JSON.stringify(data);
console.log('Stringified JSON:', jsonString);
console.log('Type after stringify:', typeof jsonString); // string

// JSON.parse() converts a JSON string back into a JavaScript object
const parsedData = JSON.parse(jsonString);
console.log('Parsed back to object:', parsedData);
console.log('Type after parsing:', typeof parsedData); // object

// You can also stringify with formatting for better readability
const prettyJsonString = JSON.stringify(data, null, 2); // The '2' adds 2 spaces of indentation
console.log('Pretty printed JSON:\n', prettyJsonString);

// // Example of using stringify for specific properties only
// const partialString = JSON.stringify(data, ['users', 'name', 'email']); 
// console.log('Partial stringify:', partialString);

// // Be careful with circular references - they will cause errors
// const circularObj = { prop: 'value' };
// circularObj.self = circularObj;
// try {
//     JSON.stringify(circularObj); // This will throw an error
// } catch (error) {
//     console.log('Circular reference error:', error.message);
// }


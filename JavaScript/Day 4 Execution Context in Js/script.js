var n = 2; // 1st part variable n = 2

function square(num){ // 2nd part function
    var ans = num * num; //this function body is stored as it is in memory
    return ans;
}

var square2 = square(n); // 1st part variable square2 = undefined
var square4 = square(4); // 1st part variable square4 = undefined

console.log(square2); // 1st part console.log(4, 16)
console.log(square4);
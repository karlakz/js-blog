{
    console.log(name); // ReferenceError: Cannot access 'name' before initialization
    let name = "Alice";
}
// hoisting of const variable
{
    console.log(color); // ReferenceError: Cannot access 'color' before initialization
    const color = "red"
}

// Function expressions are not hoisted

sayHello(); // TypeError: sayHello is not a function
let sayHello = function() {
  console.log("Hello, there!");
};

# What is hoisting in JS

*Hoisting* refers to JavaScript giving higher precedence to the declaration of variables, classes, and functions during a program’s execution. In other words, it is a behavior in which a function or a variable can be used before declaration.\
Hoisting makes the computer process declarations before any other code.\
However, it's important to note that *hoisting* does not actually move the code itself, but only the *declarations*. The assignments or initializations of variables are *not hoisted* meaning they cannot be accessed until they are reached. 

Hoisting applies differently to variable declarations (using `var`, `let`, or `const`) and function declarations.

## Variable Hoisting with `var`:
`var`-declared variables are hoisted, meaning their declarations as being "lifted" to the top of its function or global scope. However, only their declarations are hoisted, not their initializations. Therefore, when a variable is accessed before it's declared, the default value of `undefined` is assigned.
```
console.log(num); // undefined

var num = 2;

console.log(num); // 2
```

## Variable Hoisting with `let` and `const`:
With `let` and `const`, hoisting works differently. Although the declarations are hoisted, the variable is in a **"temporal dead zone"** (TDZ). The TDZ is a phase between the hoisting of a variable and its actual declaration/initialization. During this phase, accessing the variable results in a `ReferenceError`. This was introduced in ECMAScript 6 (ES6) with the introduction of `let` and `const` to make JavaScript more strict and avoid potential bugs caused by accessing variables before they are defined.
```
{
    console.log(name); // ReferenceError: Cannot access 'name' before initialization
    let name = "Alice";
}
```

```
{
    console.log(color); // ReferenceError: Cannot access 'color' before initialization
    const color = "red"
}
```

## Function Hoisting:
Unlike var declarations, which only hoist the declaration but not its value, *function declarations* are hoisted entirely — you can safely call the function anywhere in its scope before declaring it.
```
greet(); // Hi. there.

function greet() {
    console.log('Hi, there.');
}
```


Only *function declarations* are hoisted, not *function expressions* because they are assigned to variables.
```
greet(); // TypeError: greet is not a function

let greet = function() {
    console.log('Hi, there.');
}
```
**NOTE:**\
In hoisting, though it seems that the declaration has moved up in the program, the actual thing that happens is that the function and variable declarations are added to memory during the compile phase.

## References:
1. [Variable Hoisting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#variable_hoisting)
2. [Temporal Dead Zone (TDZ) and Hoisting in JavaScript](https://www.freecodecamp.org/news/javascript-temporal-dead-zone-and-hoisting-explained/)
3. [JS Hoisting](https://www.programiz.com/javascript/hoisting)



/**
 * Part 1:
 *    What will print and why? Running function x() will print undefined since the variable a is never initialized
 *    What will change if we delete line 15? Why? If we deleted line 15 then we would get the error that
 * 
 * Part 2:
 *    Change to ES6 syntax (use arrow functions and change var to let).
 * 
 * Part 3:
 *    Modify the code so that it prints 1, 2, 2, in that order. Do not move
 *        console logs.
 */


let x = () => {
  let a = 2;
  console.log(a);
}

let y = () => {
  let a = 2;
  console.log(a);
  x();
}

let a = 1;
console.log(a);
y();

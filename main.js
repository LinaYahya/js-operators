/* Logical Operators */

// &&  returns the first falsy value or the last value if no falsy value is found

// Example 1

// const a = 25;
// const b = 20;
// const c = 30;
// const isALarge =  (a > b)  && (a > c);
// console.log(isALarge);

// Example 2

// let a = 10;
// let b = 20;
// const c = (++a == 20) && (++b > 20 );
// console.log(a, b, c); // 11 20 false

/*
 * In  the above statement (++a == 20 ) is evaluated to false
 * So there is no need to check for the next condition
 * anyhow the result will be false
 * because if any one of condition fails in && , it returns false
 * so the (++b > 20) part is not executed
 * This is technically called Short-circuit evaluation
 */

// Example 3

// const a = 1;
// const b = 2;
// const c = 0;
// const d = a && b;
// console.log(d); // 2 returns last value
// const e = c && a;
// console.log(e); // 0 returns first falsy value
// const f = a && b && c && 5;
// console.log(f); // 0 last value

// Example 4

// function A() {
//   console.log("called A");
//   return undefined
// }
// function B() {
//   console.log("called B");
//   return false;
// }

// console.log(A() && B()); 

// Useful Case

// function getNameInUpperCase(userData) {
    
//     const result = userData && userData.name && userData.name.toUpperCase();
//     console.log(result);
//   return result
//   /*if we use userData.name.toUpperCase()
//   it will throw error if userData is undefined
//   So we normally use multiple condition
//   instead of that we can use the above statement.*/
// }

// getNameInUpperCase(); //undefined;
// getNameInUpperCase({}); //undefined;
// getNameInUpperCase({name : "Noob master"}); // NOOB MASTER

// OR (||) operation returns the first truthy value or the last value if no truthy value is found.

// Example 1

// const a = 2 ;
// const b = 0;

// let c = a || b;
// console.log(c);  // first truthy value
// c = b || a;
// console.log(c); // 2 last value

// Useful Example

// function getName(userData) {
//     const result = userData.name || "Noob Master ";
//     console.log(result);
//   return result
//   /*instead  of writing userData.name ? userData.name : "blah"
//   we can use above statement.*/
// }
// getName({}); //undefined;
// getName({ name: "Noor" }); // NOOB MASTER

// if(flag) {
//     doSomething();
// }
// flag && doSomething();

// function func1(parameter) {
 
//   return parameter || 10;
// }



// function func2(parameter) {
//   parameter = parameter || 10;
// }

// console.log(("aa" || 0) && 5);

// NOT ( ! ) returns the inverse boolean value of the constiable. It is a unary operation, so it operates on single operand.

// console.log(!undefined); // true
// console.log(!null); // true
// console.log(!{}); // true
// console.log(!"hi"); // false

// !! (Double NOT)
// The single ! converts a value to its truthy or falsely value, which is technically a boolean. But if you need to a real boolean representation of a value for your expression you must convert it to a real boolean value using a double not !!

// console.log(!!0);
// console.log(!!'');
// console.log(!!false);
// console.log(!!NaN);
// console.log(!!undefined);
// console.log(!!null);
// console.log(!!{});

// Operator Precedence Not > and > or
// console.log(true || (false && false));
// console.log(0 && 1 && "foo");
// console.log(true || (true && false));
// console.log(false || 6 && undefined);
// console.log(true || ("abc" && 0));
console.log(0 || "abc" && 19 || false);
// console.log((7 && 3 && 0) || (4 && false));
// console.log((19 && "Hello" && null) || 4 || (undefined && false));

// Conditional Statements
// describe the difference between statement and expression in case of if else

// Replace to logical operations using short circuit

// Recap

// let a = 10;
// if (a > 5) {
//     alert("a is greater than  5");
// }
// console.log(a++ && 15);
// console.log(a);
// console.log(false && a++);
// console.log(a);


// var time = 22;
// var greeting;
// if (time < 20) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

// var time = 19;
// var greeting;
// if (time < 20) {
//     greeting = "Good day";
// }
// greeting = "Good evening";

// console.log(greeting);


// var foo = 0;
// switch (foo) {
//   case -1:
//     console.log('negative 1');
//     break;
//   case 0:
//     console.log(0);
//   case 1:
//     console.log(1);
//     break;
//   case 2:
//     console.log(2);
//     break;
//   default:
//     console.log('default');
// }

const isLarger = 5>4 ? "condition if true": "else";
console.log(isLarger);
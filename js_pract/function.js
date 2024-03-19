// // 早期寫法
// let add1 = function(a, b){
//     return a+b;
// };
// console.log(add1(1, 2));
// //後期寫法
// let add2 = (a, b) => {
//     return a+b;
// };
// console.log(add2(1, 2));

// // 宣告Hello
// let Hello = () => {
//     console.log("HELLO!!!!!!!!!!!");
// }
// Hello();

// //arr.map 完整寫法
// arr1 = [1, 2, 3];
// // arr1.map(n => n*3); 
// let arr2 = arr1.map((n) => {
//     return n*3;
// });
// console.log("arr2: ", arr2);

console.log("-".repeat(10));

let test1 = function(a, b){
    console.log(`test1: ${a}, ${b}`);
};
test1(1, 2);

console.log("-".repeat(20));

let test2 = (a, b) =>{
    console.log(`test2: ${a}, ${b}`)
};
test2(1, 2);

console.log('-'.repeat(20));

let test3 = a =>{
    console.log(`test3: ${a}`);
};
test3(2);

console.log('-'.repeat(20));
// test4 會被提升到作用域的頂部，可以將函式調用寫在定義前
test4(1, 2);
function test4(a, b){
    console.log(`test4: ${a}, ${b}`);
};


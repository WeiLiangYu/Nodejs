// spread Operator
// ... 與 = 皆為複製，但複製方法不相同
// ... 複製屬性與值
console.log(`Spread in Arr.`)
let a = [1, 2, 3];
let newA = [...a, 4];

console.log(newA);

console.log(`\nSpread in Obj.`)
let b = {
    "name" : "測試"
};
let newB = {
    ...b,
    "age": 20
};
console.log(newB);

// = 複製地址
console.log('\n使用等號複製.');
let A = ['嗨!'];
let equalA = A;
equalA[0] = "equalA變了";
console.log(`A: ${A}, equalA: ${equalA}.`);

A[0] = "A變了";
console.log(`A: ${A}, equalA: ${equalA}.`);
// Rest
console.log(`\nRest in function.`)
let restTest = (...args) => {
    res = args.filter(num => num === 2);
    console.log('.');
    return res;
}
console.log(restTest(1, 2, 3));

// destructuring 解構賦值
let nums = [1, 2, 3];
let [num1, num2] = nums;
console.log(`num1: ${num1}, num2: ${num2}`);
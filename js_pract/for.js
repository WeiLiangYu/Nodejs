// for-loop
a = [1, 2, 3, 4, 5]
for (let i=0; i < a.lenght; i++){
    console.log(a[i]);
}
console.log('-'.repeat(20));
console.log('of');
for (let num of a){
    console.log(num);
}

console.log('-'.repeat(20));
console.log('ForEach')
a.forEach(num => {
    console.log(num);
});

console.log('-'.repeat(20));
console.log('錯誤，使用in!')
// 錯誤，適用於obj的key中
for (let num in a){
    console.log(num);
}

console.log('*'.repeat(10));

// while-loop
let loop = 0;
while (loop < 10){
    console.log(`第 ${loop} 次`);
    loop += 1;
}

// 大樂透 1~49 可重複抽 6 號碼
res = [];
while (true){
    // Math.random(): [0, 1) 的小數
    // Math.ceil(): 無條件進位
    num = Math.ceil(Math.random()*49); // [0, 49)小數
    if (!(res.includes(num))) res.push(num); 
    else console.log(`重複! ${num}`);
    if (res.length >= 6) break;
}
console.log(res.sort( (a, b) => a-b  )); // 排序
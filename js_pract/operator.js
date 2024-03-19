// // == 與 === 比較

// console.log("1 == 1:", 1==1);
// console.log('1 == "1":', 1=="1");
// console.log("1 == true:", 1==true);

// console.log("1 == 1:", 1===1);
// console.log('1 == "1":', 1==="1");
// console.log("1 == true:", 1===true);

// // 練習
// let gender = "M";
// let age = 20;

// if (gender === "M"){
//     if (age >= 30){
//         console.log("$1,000");
//     } else {
//         console.log("$700");
//     }
// } else if (gender == "F"){
//     console.log("$500");
// }

// // 1. 1+...+100
// let sum = 0;
// for (let i=1; i<=100; i++){
//     sum += i;
// }
// console.log(sum);
// console.log("\n");
// // 2 印星星
// for (let i=6; i>=1; i--){
//     console.log('*'.repeat(i));
// };
// console.log("\n");
// // 3 字串使用idx
// let tname = "Jack!";
// for (let i=0; i < tname.length; i++){
//     console.log(tname[i].repeat(tname.length-i));
// }


// 1 印星星

// lens = 6;
// for (let i = lens; i > 1; i--){
//     console.log("*".repeat(i));
// }
// for (let i = 1; i <= lens; i++){
//     console.log("*".repeat(i));
// }

for (let i=0; i<=11; i++){
    if (i < 6) console.log('*'.repeat(6-i));
    else console.log('*'.repeat(i-4));
}

// 2 計算陣列的元素個數
let data = ["a", "b", 'c', 'c', 'c', 'a', 'd', 'b', 'b', 'a', 'c'];
let res = {};
for (let i=0; i < data.length; i++){
    if (data[i] in res){
        res[data[i]] += 1;
    } else {
        res[data[i]] = 1;
    }
}
console.log(res);

// 3 九九乘法
let res3 = ""
for (let i=1; i <= 9; i++){
    for (let j=1; j <= 9; j++){
        res3 += `${i}x${j}=${i*j} `;
        if (i*j < 10) res3 += " ";
    }
    res3 += "\n";
}
console.log(res3);

// 4 費氏數列 1, 1, 2, 3, 5, 8, 13, ...
let func = (n) => {
    if (n === 1 || n === 2){
        return 1;
    } else {
        let pre_1 = 1;
        let pre_2 = 1;
        for (let i = 0; i < n-3; i++){
            let mid = pre_2;
            pre_2 += pre_1;
            pre_1 = mid;
        }
        return pre_1 + pre_2;
    }
}
for (let i=0; i<10; i++){
    console.log(func(i));
}

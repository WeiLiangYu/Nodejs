let studentsScores = [
    {"name": "Jeff", "age": 18, "scores": [95, 88, 100]},
    {"name": "Leo", "age": 22, "scores": [90, 97, 98]},
    {"name": "Holy", "age": 25, "scores": [75, 68, 90]},
    {"name": "Keven", "age": 33, "scores": [77, 65, 32]},
    {"name": "Jenny", "age": 20, "scores": [63, 82, 91]},
    {"name": "Elle", "age": 31, "scores": [100, 73, 83]}
]
let res1 = studentsScores.filter(student => student["age"] >= 30)
                        .map(student => student["name"]);
console.log(res1);
let res2 = studentsScores.filter(student => (student["scores"][0] + student["scores"][1] + student["scores"][2]) >= 250)
                        .map(student => student["name"] + "-" + student["age"]);
console.log(res2);
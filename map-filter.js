const number = [3, 5, 7, 2, 8, 4];
// const output = [];

// for(let i = 0; i < number.length; i++){
//     const element = number[i];            ----1WAY Squre----
//     const result = element * element;
//     output.push(result);
// }


// const res = number.map(function(element){
//     return element * element;
// })
// console.log(res);

// const nam = number.map(x => x * x);
// console.log(nam);

const filter = number.filter(function(x){
    return x < 5;
});

console.log(filter);
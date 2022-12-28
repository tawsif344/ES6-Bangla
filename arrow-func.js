// function name(num) {
//     return num * 2;
// }

const name = function(num){         //2Way Function Declair//
    return num * 3;
}

const result = name(30);
console.log(result);


{
    const dubble = num =>{
       return num * 2
    }
    const result = dubble(20);
    console.log(result);
}

{
    const doMath = (x, y) =>{
        const sum = x + y;
        const deff = x - y;
        const result = sum * deff;
        return result;
    }
    const result4 = doMath(8, 6);
    console.log(result4);
}
const number = [2, 4, 9, 45, 24, 98, 36, 62, 75];

for (let i = 0; i < number.length; i++){
    if (number[i] > 50) {
        break;
    }

    // console.log(number[i]);
}

const numbers = [-65, 10, -35, 25, -98, 45, -57];

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] < 0){
        continue;
    }
    const res = numbers[i];
    console.log(res);
}
function add(number1, number2){
    number2 = number2 || 0;
    return number1 + number2;
}

const total = add(15);
console.log(total);

{
    function ad(num, num2){
        if(num2 == undefined){
            num2 = 0;
            return num + num2;
        }
    }
    let total = ad(215 + 162);
    console.log(total);
}

{
    function ab(nam1, nam2 = 20){
        return nam1 + nam2;
    }

    let final = ab(12);
    
    console.log(final);
}
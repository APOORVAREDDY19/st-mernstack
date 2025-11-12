function calculate(num1,num2,operation){
    if (operation==='add'){
        console.log(num1+num2);
    }
    else if(operation==='subtract'){
        console.log(num1-num2);
    }
    else if (operation === 'multiply') {
            return num1 * num2;}

    else{
console.log("invalid operator");
    }
}
calculate(2,5,'add');
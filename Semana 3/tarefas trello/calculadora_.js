const form = document.querySelector('form');
const result = document.querySelector('.result');

const sumFunction = (num1,num2) => {
    return Number.parseFloat(num1) + Number.parseFloat(num2)
}

const subtractFunction = (num1,num2) =>{
    return Number.parseFloat(num1) - Number.parseFloat(num2)
}

const multiplyFunction = (num1,num2) =>{
    return Number.parseFloat(num1) * Number.parseFloat(num2)
} 

const divideFunction = (num1,num2) =>{
    return parseFloat(num1) / Number.parseFloat(num2)
}

form.addEventListener("submit", function(event){
    const firstNumber = document.querySelector('#firstValue').value;
    const secondNumber = document.querySelector('#secondValue').value;

    if (event.submitter.id === 'sum'){
        result.innerHTML = sumFunction(firstNumber,secondNumber);
    }
    else if (event.submitter.id === 'subtract'){
        result.innerHTML = subtractFunction(firstNumber,secondNumber);
    }
    else if (event.submitter.id === 'multiply'){
        result.innerHTML = multiplyFunction(firstNumber,secondNumber);
    }
    else{
        result.innerHTML = divideFunction(firstNumber,secondNumber);
    }

})
const form = document.querySelector('form');
const result= document.querySelector('.result');

const sumFunction = (num1,num2)=>{
    return Number.parseFloat(num1) + Number.parseFloat(num2);//Number.parseFloat transforma uma string em numero que pode ser um numero fracionário
}

const subtractFunction = (num1,num2)=>{
    return Number.parseFloat(num1) - Number.parseFloat(num2);
}
const multiplyFunction = (num1,num2)=>{
    return Number.parseFloat(num1) * Number.parseFloat(num2);
}
const divideFunction = (num1,num2)=>{
    return Number.parseFloat(num1) / Number.parseFloat(num2);
}

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    const firstValue = document.querySelector('#firstValue').value;
    const secondValue = document.querySelector('#secondValue').value;
    console.log(event);
    if(event.submitter.id === 'sum'){
        result.innerHTML = sumFunction(firstValue,secondValue);//Poderia ser o textContent
    }
    else if(event.submitter.id === 'subtract'){
        result.innerHTML = subtractFunction(firstValue,secondValue);
    }
    else if(event.submitter.id === 'multiply'){
        result.innerHTML = multiplyFunction(firstValue,secondValue);
    }
    else{
        result.innerHTML = divideFunction(firstValue,secondValue);
    }

})

/* //Get the input to do operations with them
let numOne = document.querySelector(".num-1"),
  numTwo = document.querySelector(".num-2"),
  result = document.querySelector(".result");

// Functions that perform the types of calculations
const sum = (num1, num2) => num1 + num2,
  sub = (num1, num2) => num1 - num2,
  mult = (num1, num2) => num1 * num2,
  div = (num1, num2) => num1 / num2;

// Callback function invoked buttons
function calc(op) {
  numOne = Number(numOne.value);
  numTwo = Number(num

*/
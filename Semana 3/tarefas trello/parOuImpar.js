const form = document.querySelector('form');
const result= document.querySelector('.result');

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    const number = document.querySelector('#number').value;

    if (number % 2 === 0){
        result.innerHTML = 'Numero é Par'    
    } else {
        result.innerHTML = 'Numero é impar'
    }
form.reset();
})  
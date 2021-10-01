const form = document.querySelector('form');
const mostraIdade = document.querySelector('.age-value');
form.addEventListener("submit", function(event){
    event.preventDefault();
    const inputDate = document.querySelector('#ageInput').value;
    const birthday = new Date(inputDate).getFullYear();
    const currentDate = new Date().getFullYear();
    const age = Math.abs(currentDate - birthday);
    mostraIdade.innerHTML = `Sua idade é ${age}`;
    form.reset();
})
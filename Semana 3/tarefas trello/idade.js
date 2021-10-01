const form = document.querySelector('form');

form.addEventListener("submit", function(event){
    event.preventDefault();
    const ageValue= document.querySelector('.age-value');
    const inputDate = document.querySelector('#ageInput').value;//string
    const dateOfBirth = new Date(inputDate).getFullYear();//pega o valor digitado no form com formato data
    const currentDate = new Date().getFullYear();//pega a data atual em formato data
    const ageResult = Math.abs(dateOfBirth - currentDate);
    console.log('A sua idade é : ', ageResult);
    ageValue.innerHTML = `Sua idade é ${ageResult}`;
    


}

)
const form = document.querySelector("#formulario")
form.addEventListener("submit",function(event) {
event.preventDefault()

const codigoP = form.elements["codigo"];

if (codigoP.value.length == 9) {
    let modeloP = codigoP.value.substr(0,3);
    let loteP = codigoP.value.substr(3,2);
    let corP = codigoP.value.substr(5,3);
    let voltagemP = codigoP.value.substr(8,1);
    
    document.querySelector("#modelo").innerHTML = "Modelo é " + modeloP;
    document.querySelector("#lote").innerHTML = 'Lote é ' + loteP;

    if(corP == 001){
        document.querySelector("#cor").innerHTML = 'A cor do produto é vermelho';
    }
    else if (corP == 002){
        document.querySelector("#cor").innerHTML = 'A cor do produto é preto';
    }
    else if (corP == 003){
        document.querySelector("#cor").innerHTML = 'A cor do produto é Amarelo';
    }
    else{
        document.querySelector("#cor").innerHTML = ' A cor do produto não é uma cor válida';
    }
    if(voltagemP == 1){
        document.querySelector("#voltagem").innerHTML = ' A voltagem do produto é 110v'
    }
    else if (voltagemP == 2){
        document.querySelector("#voltagem").innerHTML = 'A voltagem do produto é 220v';
    }  
    else{
        document.querySelector("#voltagem").innerHTML = ' A voltagem do produto não é válida';
    }
 }
else{
  alert("Codigo do produto deve ter 9 digitos");
}
})


 


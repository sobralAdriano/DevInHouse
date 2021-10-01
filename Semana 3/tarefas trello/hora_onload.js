window.onload = () =>{
 const data = new Date(HH,mm);
 const hora = data.toLocaleTimeString();
 document.querySelector('.relogio').innerHTML= hora;
}




/*function atualizarRelogio() {
    const data = new Date();
    const hora = data.toLocaleTimeString();

    document.querySelector(".relogio").innerHTML = hora;
  }

  const criarRelogio = setInterval(atualizarRelogio, 1000);

  function pararRelogio() {
    clearInterval(criarRelogio);
  }*/
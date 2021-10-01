setInterval(function atualizarRelogio() {
    const horaAtual = document.querySelector('.relogio')
    const data = new Date();
    const hora = data.toLocaleTimeSt.ring();

    document.querySelector(".relogio").innerHTML = hora;
  }

  const criarRelogio = setInterval(atualizarRelogio, 1000);

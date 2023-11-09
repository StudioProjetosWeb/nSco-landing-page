function iniciarContador(contador, botao) {
  // Verifica se já existe uma data de término armazenada
  let fim = localStorage.getItem('fimContador');
  if (!fim) {
    // Define a data de término para daqui a 1 minuto
    fim = new Date().getTime() + 60000;
    localStorage.setItem('fimContador', fim);
  }

  let intervalo = setInterval(function() {
    let agora = new Date().getTime();
    let distancia = fim - agora;

    let minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    contador.textContent = (minutos < 10 ? '0' : '') + minutos + ":" +
                           (segundos < 10 ? '0' : '') + segundos;

    if (distancia < 0) {
      clearInterval(intervalo);
      contador.style.display = 'none'; // Oculta o contador
      botao.style.display = 'block'; // Exibe o botão
      localStorage.removeItem('fimContador'); // Limpa a data de término
    }
  }, 1000);
}

window.onload = function () {
  let contadorElement = document.getElementById('contador');
  let botaoAcessar = document.getElementById('botaoAcessar');
  iniciarContador(contadorElement, botaoAcessar);
  botaoAcessar.onclick = function() {
    window.location.href = 'https://www.seulink.com'; // Substitua pela URL desejada
  };
};

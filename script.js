function iniciarContador(duracao, contador, botao) {
  let timer = duracao, minutos, segundos;
  let intervalo = setInterval(function () {
    minutos = parseInt(timer / 60, 10);
    segundos = parseInt(timer % 60, 10);

    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    contador.textContent = minutos + ":" + segundos;

    if (--timer < 0) {
      clearInterval(intervalo);
      contador.style.display = 'none'; // Oculta o contador
      botao.style.display = 'block'; // Exibe o botão
    }
  }, 1000);
}

window.onload = function () {
  let duracao = 60; // 1 minuto em segundos
  let contadorElement = document.getElementById('contador');
  let botaoAcessar = document.getElementById('botaoAcessar');
  iniciarContador(duracao, contadorElement, botaoAcessar);
  botaoAcessar.onclick = function() {
    window.location.href = 'https://www.seulink.com'; // Substitua pela URL desejada
  };
};

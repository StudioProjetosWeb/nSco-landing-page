document.addEventListener('DOMContentLoaded', function () {
  const contadorElement = document.getElementById('contador');
  const botaoAcessar = document.getElementById('botaoAcessar');
  const urlDestino = 'https://www.instagram.com/nsco.ag/';
  
  let targetTime = localStorage.getItem('targetTime');
  if (!targetTime) {
    targetTime = Date.now() + 20000; // 20 segundos
    localStorage.setItem('targetTime', targetTime);
  }

  function updateCounter() {
    const currentTime = Date.now();
    const timeLeft = targetTime - currentTime;

    if (timeLeft > 0) {
      const seconds = Math.floor(timeLeft / 1000) % 60;
      contadorElement.textContent = '00:' + (seconds < 10 ? '0' : '') + seconds;
    } else {
      clearInterval(interval);
      localStorage.removeItem('targetTime');
      contadorElement.style.display = 'none';
      botaoAcessar.style.display = 'block';
    }
  }

  const interval = setInterval(updateCounter, 1000);
  updateCounter(); // Chama a função imediatamente para evitar o atraso inicial de 1 segundo

  botaoAcessar.addEventListener('click', function() {
    window.location.href = urlDestino;
    localStorage.setItem('redirected', 'true'); // Define um estado que impede o retorno ao contador
  });

  // Checa se o usuário já foi redirecionado anteriormente e mantém no link externo
  if (localStorage.getItem('redirected')) {
    window.location.href = urlDestino;
  }
});

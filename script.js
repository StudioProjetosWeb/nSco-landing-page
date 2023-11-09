document.addEventListener('DOMContentLoaded', function () {
  const contadorElement = document.getElementById('contador');
  const botaoAcessar = document.getElementById('botaoAcessar');
  const targetTime = localStorage.getItem('targetTime') || Date.now() + 20000; // 20 segundos
  localStorage.setItem('targetTime', targetTime);

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
    window.location.href = 'https://view.genial.ly/654c3a28833c7c00112cf8dc/interactive-content-projeto-demostracao';
  });
});

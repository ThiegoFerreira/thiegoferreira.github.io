const dataEvento = new Date("2025-05-16T14:00:00").getTime();

const atualizarContagem = () => {
  const agora = new Date().getTime();
  const distancia = dataEvento - agora;

  if (distancia < 0) {
    document.querySelector('.timer').innerHTML = "<h2>O evento começou! 🎉</h2>";
    clearInterval(intervalo);
    return;
  }

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  document.getElementById("dias").textContent = String(dias).padStart(2, '0');
  document.getElementById("horas").textContent = String(horas).padStart(2, '0');
  document.getElementById("minutos").textContent = String(minutos).padStart(2, '0');
  document.getElementById("segundos").textContent = String(segundos).padStart(2, '0');
};

// Atualiza a cada segundo
const intervalo = setInterval(atualizarContagem, 1000);
atualizarContagem(); // executa uma vez imediatamente
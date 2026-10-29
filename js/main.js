const entrada = document.querySelector('#entrada');
const porta = document.querySelector('.porta');
const tunel = document.querySelector('#tunel');
const botao = document.querySelector('#entrar');
let emTransicao = false;

function atravessar() {
  if (emTransicao) return;
  emTransicao = true;
  document.body.style.overflow = 'hidden';
  porta.classList.add('aberta');

  setTimeout(() => {
    tunel.classList.add('ativo');
    entrada.classList.add('saindo');
  }, 600);

  // 600 ms da porta + 3 segundos do túnel
  setTimeout(() => {
    entrada.classList.add('escondida');
    tunel.classList.remove('ativo');
    document.body.style.overflow = '';
  }, 3600);
}

botao.addEventListener('click', atravessar);
porta.addEventListener('click', atravessar);

const destino = new Date('2026-11-07T19:00:00-03:00').getTime();
function atualizarContador() {
  const total = Math.max(0, Math.floor((destino - Date.now()) / 1000));
  const valores = {
    dias: Math.floor(total / 86400),
    horas: Math.floor((total % 86400) / 3600),
    minutos: Math.floor((total % 3600) / 60),
    segundos: total % 60
  };
  Object.entries(valores).forEach(([id, n]) => {
    document.getElementById(id).textContent = String(n).padStart(2, '0');
  });
}
atualizarContador();
setInterval(atualizarContador, 1000);

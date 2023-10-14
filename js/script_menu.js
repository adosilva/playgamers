// Script responsável pela automação do menu hamburger

const btnMobile = document.getElementById('btn-mobile');
// const >> declara a nossa variável, no uso do decorrer do código

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
      event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
      event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile;addEventListener('touchstart', toggleMenu)
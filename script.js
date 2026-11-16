// Affiche les alertes de la console l'une après l'autre, une seule fois au chargement.
document.documentElement.classList.add('js');

document.getElementById('year').textContent = new Date().getFullYear();

const lines = document.querySelectorAll('#log li');
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
lines.forEach((li, i) => {
  if (reduce) { li.classList.add('in'); return; }
  setTimeout(() => li.classList.add('in'), 400 + i * 450);
});

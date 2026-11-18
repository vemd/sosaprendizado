'use strict';

const form = document.getElementById('demo-form');
const result = document.getElementById('demo-result');
if (form && result) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const answer = new FormData(form).get('answer');
    if (!answer) return;
    const correct = answer === '4';
    result.hidden = false;
    result.className = 'demo-result ' + (correct ? 'correct' : 'retry');
    result.replaceChildren();
    const title = document.createElement('strong');
    title.textContent = correct ? 'Certo, x = 4.' : 'Vamos resolver passo a passo.';
    const explanation = document.createElement('p');
    explanation.textContent = 'Retira 3 de ambos os lados. Ficas com 2x = 8. Divide os dois lados por 2 e encontras x = 4.';
    result.append(title, explanation);
    const button = form.querySelector('button');
    if (button) button.textContent = 'Verificar novamente';
  });
  form.addEventListener('change', () => { result.hidden = true; });
}
const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());

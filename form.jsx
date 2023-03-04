// Formulario JS

// Selector de idiomas
function traducir() {
  const languageSelector = document.getElementById('languageSelector');
  const idiomaSeleccionado = languageSelector.value;
  const url = `./api/${idiomaSeleccionado}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const elementos = document.querySelectorAll('[data-traduccion]');
      elementos.forEach(elemento => {
        const traduccion = data[elemento.dataset.traduccion];
        elemento.textContent = traduccion;
      });
    })
    .catch(error => console.error(error));
}

document.addEventListener('DOMContentLoaded', function() {
  traducir();
});

languageSelector.onchange = ("change", () => {
  traducir();
});


// Representar el número de caracteres restantes
const text_id = document.getElementById('text_id');

const caracteresRestantes = () =>
  document.querySelector('label[for="text_id"]').textContent = 
    `Comentarios (${text_id.value.length} / 200)`;
text_id.onkeyup = caracteresRestantes;


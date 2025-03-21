const quantidade = document.getElementById('quantidade_modulo');

let qtd = 0;

function marcado(evento) {
    if (evento.checked === true) {
        qtd += 1;
    } else {
        qtd -= 1;
    }

    quantidade.innerHTML = qtd;
}

// Função para habilitar ou desabilitar o Dark Mode
function habilitarDarkmode(event) {
    if (event.checked === false) {
        localStorage.removeItem('darkmode');
        location.href = "";
        return;
    }

    localStorage.setItem('darkmode', 'sim');

    document.getElementsByTagName("head")[0].innerHTML += `
        <link id="darkmode-style" rel="stylesheet" href="../css/darkmode.css">
    `;
}

// Aplicar Dark Mode ao carregar a página
if (localStorage.getItem('darkmode') === 'sim') {
    document.getElementsByTagName("head")[0].innerHTML += `
        <link id="darkmode-style" rel="stylesheet" href="../css/darkmode.css">
    `;
    document.getElementById('darkmode').checked = true;
}

// ------ Código de Mudança de Idioma ------
function changeLanguage(lang) {
    localStorage.setItem("language", lang);
    location.reload(); // Recarrega a página para aplicar o novo idioma
}

// Aplicar idioma salvo ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
    const lang = localStorage.getItem("language") || "pt";
    
    fetch(`../locales/${lang}.json`)
        .then(response => response.json())
        .then(translations => {
            document.querySelectorAll("[data-i18n]").forEach(el => {
                el.innerText = translations[el.dataset.i18n] || el.innerText;
            });
        });
});

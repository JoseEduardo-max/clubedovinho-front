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

if (localStorage.getItem('darkmode') === 'sim') {
    document.getElementsByTagName("head")[0].innerHTML += `
        <link id="darkmode-style" rel="stylesheet" href="../css/darkmode.css">
    `;
    document.getElementById('darkmode').checked = true;
}

// Função para trocar o idioma e atualizar a página
function changeLanguage(lang) {
    localStorage.setItem("language", lang); 
    carregarIdioma(lang); 
}

// Função para carregar as traduções no idioma escolhido
function carregarIdioma(lang) {
    fetch(`../locales/${lang}.json`)
        .then(response => response.json())
        .then(translations => {
            document.querySelectorAll("[data-i18n]").forEach(el => {
                el.innerText = translations[el.dataset.i18n] || el.innerText;
            });
        });
}

// Aplicar idioma salvo ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
    const lang = localStorage.getItem("language") || "pt"; 
    carregarIdioma(lang); 
});

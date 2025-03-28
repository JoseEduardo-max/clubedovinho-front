import i18next from "i18next"; 

i18next.init({
    lng: localStorage.getItem("language") || "pt",
    resources: {
        en: {
            translation: {
                "title": "Wine Club",
                "description": "The best wines selected for you.",
                "subscribe": "Subscribe Now",
                "contact": "Contact Us"
            }
        },
        pt: {
            translation: {
                "title": "Clube do Vinho",
                "description": "Os melhores vinhos selecionados para você.",
                "subscribe": "Assine Agora",
                "contact": "Fale Conosco"
            }
        }
    }
}).then(() => updateText());

function updateText() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        el.innerText = i18next.t(el.dataset.i18n);
    });
}

export function changeLanguage(lang) {
    localStorage.setItem("language", lang);
    i18next.changeLanguage(lang, updateText);
}

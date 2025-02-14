
function enviar() {
    event.preventDefault(); 

    let input_nome = document.getElementById('nome');
    let input_descricao = document.getElementById('descricao');

    let erro_nome = document.getElementById('erro_nome');
    let erro_descricao = document.getElementById('erro_descricao');


    if (input_nome.value == '') {
        input_nome.classList.remove('is-valid');
        input_nome.classList.add('is-invalid');
        erro_nome.style.display = 'block';
    } else {
        input_nome.classList.remove('is-invalid');
        input_nome.classList.add('is-valid')
        erro_nome.style.display = 'none';
    }

    if (input_descricao.value == '') {
        input_descricao.classList.remove('is-invalid');
        input_descricao.classList.add('is-invalid');
        erro_descricao.style.display = 'block';
    } else {
        input_descricao.classList.remove('is-invalid');
        input_descricao.classList.add('is-valid');
        erro_descricao.style.display = 'none';
    }

}


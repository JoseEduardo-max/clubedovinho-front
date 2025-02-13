const TABLE = document.getElementById('table-countries');

let dados = [
    {
        id: 1,
        nome: 'Brasil',
        abreviacao: 'BR'
    },
    {
        id: 2,
        nome: 'Argentina',
        abreviacao: 'AR'
    },
    {
        id: 3,
        nome: 'Bolivia',
        abreviacao: 'BO'
    },
    {
        id: 4,
        nome: 'Portugal',
        abreviacao: 'PT'
    },
];




dados.forEach(country => {
    TABLE.innerHTML += `
        <tr>
            <td>${country.id}</td>
            <td>${country.nome}</td>
            <td>${country.abreviacao}</td>
            <td>
                <a href="#" class="btn btn-outline-warning btn-sm">
                    Editar
                </a>
                <a href="#" class="btn btn-outline-danger btn-sm">
                    Excluir
                </a>
            </td>
        </tr>
    `;

});




const TABLE = document.getElementById('table-categories');

let dados = [
    {
        id: 1,
        nome: 'Espumante',
        descricao: 'Vinho frisante, ideal para celebrações, produzido com método Champenoise ou Charmat.'
    },
    {
        id: 2,
        nome: 'Branco',
        descricao: 'Vinho de uvas brancas, geralmente leve e refrescante, ideal para dias quentes.'
    },
    {
        id: 3,
        nome: 'Verde',
        descricao: 'Vinho jovem, feito com uvas verdes, típico de Portugal, com acidez marcante.'
    },
    {
        id: 4,
        nome: 'Tinto',
        descricao: 'Vinho encorpado feito a partir de uvas escuras, ideal para acompanhar carnes.'
    },
    {
        id: 5,
        nome: 'Rosé',
        descricao: 'Vinho de coloração rosada, equilibrando a leveza do branco e a estrutura do tinto.'
    },
    {
        id: 6,
        nome: 'Malbec',
        descricao: 'Vinho tinto encorpado, originário da França, mas popular na Argentina.'
    },
    {
        id: 7,
        nome: 'Cabernet Sauvignon',
        descricao: 'Vinho tinto intenso, com notas de frutas escuras e taninos marcantes.'
    },
    {
        id: 8,
        nome: 'Merlot',
        descricao: 'Vinho tinto macio e frutado, ideal para quem está iniciando no mundo dos vinhos.'
    },
    {
        id: 9,
        nome: 'Pinot Noir',
        descricao: 'Vinho tinto mais leve, com aromas de frutas vermelhas e especiarias.'
    },
    {
        id: 10,
        nome: 'Syrah',
        descricao: 'Vinho tinto encorpado e picante, com notas de pimenta e frutas negras.'
    },
    {
        id: 11,
        nome: 'Chardonnay',
        descricao: 'Vinho branco encorpado, podendo ser fresco ou amanteigado, dependendo da fermentação.'
    },
    {
        id: 12,
        nome: 'Sauvignon Blanc',
        descricao: 'Vinho branco leve e fresco, com aromas herbáceos e cítricos.'
    },
    {
        id: 13,
        nome: 'Riesling',
        descricao: 'Vinho branco aromático, podendo variar entre seco e doce.'
    },
    {
        id: 14,
        nome: 'Zinfandel',
        descricao: 'Vinho tinto frutado, muito popular nos Estados Unidos.'
    },
    {
        id: 15,
        nome: 'Carmenère',
        descricao: 'Vinho tinto originário da França, mas muito cultivado no Chile, com notas de especiarias.'
    }
];



dados.forEach(addLinha);


function addLinha(categoria) {
    TABLE.innerHTML += `
    <tr>
        <td>${categoria.id}</td>
        <td>${categoria.nome}</td>
        <td>${categoria.descricao}</td>
        <td>
            <a href="" class="btn btn-outline-warning btn-sm">
                Editar
            </a>
            <a href="" class="btn btn-outline-danger btn-sm">
                Excluir
            </a>
        </td>
    </tr>
`;
}

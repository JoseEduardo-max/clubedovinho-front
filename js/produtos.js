const TABLE = document.getElementById('table-products');

let dados = [
    {
        id: 1,
        nome: 'Espumante',
        categoria: 'Vinho frisante, ideal para celebrações, produzido com método Champenoise ou Charmat.',
        imagem: '',
        quantidade: 50,
        valor: 120.00
    },
    {
        id: 2,
        nome: 'Branco',
        categoria: 'Vinho de uvas brancas, geralmente leve e refrescante, ideal para dias quentes.',
        imagem: '',
        quantidade: 30,
        valor: 90.00
    },
    {
        id: 3,
        nome: 'Verde',
        categoria: 'Vinho jovem, feito com uvas verdes, típico de Portugal, com acidez marcante.',
        imagem: '',
        quantidade: 40,
        valor: 85.00
    },
    {
        id: 4,
        nome: 'Tinto',
        categoria: 'Vinho encorpado feito a partir de uvas escuras, ideal para acompanhar carnes.',
        imagem: '',
        quantidade: 60,
        valor: 150.00
    },
    {
        id: 5,
        nome: 'Rosé',
        categoria: 'Vinho de coloração rosada, equilibrando a leveza do branco e a estrutura do tinto.',
        imagem: '',
        quantidade: 35,
        valor: 95.00
    },
    {
        id: 6,
        nome: 'Malbec',
        categoria: 'Vinho tinto encorpado, originário da França, mas popular na Argentina.',
        imagem: '',
        quantidade: 25,
        valor: 130.00
    },
    {
        id: 7,
        nome: 'Cabernet Sauvignon',
        categoria: 'Vinho tinto intenso, com notas de frutas escuras e taninos marcantes.',
        imagem: '',
        quantidade: 45,
        valor: 140.00
    },
    {
        id: 8,
        nome: 'Merlot',
        categoria: 'Vinho tinto macio e frutado, ideal para quem está iniciando no mundo dos vinhos.',
        imagem: '',
        quantidade: 55,
        valor: 110.00
    },
    {
        id: 9,
        nome: 'Pinot Noir',
        categoria: 'Vinho tinto mais leve, com aromas de frutas vermelhas e especiarias.',
        imagem: '',
        quantidade: 20,
        valor: 160.00
    },
    {
        id: 10,
        nome: 'Syrah',
        categoria: 'Vinho tinto encorpado e picante, com notas de pimenta e frutas negras.',
        imagem: '',
        quantidade: 38,
        valor: 145.00
    },
    {
        id: 11,
        nome: 'Chardonnay',
        categoria: 'Vinho branco encorpado, podendo ser fresco ou amanteigado, dependendo da fermentação.',
        imagem: '',
        quantidade: 42,
        valor: 125.00
    },
    {
        id: 12,
        nome: 'Sauvignon Blanc',
        categoria: 'Vinho branco leve e fresco, com aromas herbáceos e cítricos.',
        imagem: '',
        quantidade: 37,
        valor: 100.00
    },
    {
        id: 13,
        nome: 'Riesling',
        categoria: 'Vinho branco aromático, podendo variar entre seco e doce.',
        imagem: '',
        quantidade: 28,
        valor: 135.00
    },
    {
        id: 14,
        nome: 'Zinfandel',
        categoria: 'Vinho tinto frutado, muito popular nos Estados Unidos.',
        imagem: '',
        quantidade: 48,
        valor: 155.00
    },
    {
        id: 15,
        nome: 'Carmenère',
        categoria: 'Vinho tinto originário da França, mas muito cultivado no Chile, com notas de especiarias.',
        imagem: '',
        quantidade: 32,
        valor: 115.00
    }
];




dados.forEach(product => {
    TABLE.innerHTML += `
        <tr>
            <td>${product.id}</td>
            <td>${product.nome}</td>
            <td>${product.categoria}</td>
            <td><img src="${product.imagem}" alt="${product.nome}" width="50" class="img-thumbnail" 
                data-bs-toggle="modal" data-bs-target="#imageModal" onclick="openModal('${product.imagem}', '${product.nome}')">
            </td>
            <td>${product.quantidade}</td>
            <td>${product.valor}</td>
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

function openModal(imagem, nome) {
    document.getElementById("modalImage").src = imagem;
    document.getElementById("imageModalLabel").innerText = nome; 
}





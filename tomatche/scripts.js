// Carrega receitas do localStorage ou cria array vazio
let receitas = JSON.parse(localStorage.getItem('receitas')) || [];
if (receitas.length === 0) {
    receitas = [
        { nome: 'Bolo de Chocolate', descricao: 'Bolo macio com cobertura de chocolate e brigadeiro.' },
        { nome: 'Panqueca', descricao: 'Massa fina recheada com carne moída e molho de tomate.' },
        { nome: 'Brigadeiro', descricao: 'Docinho brasileiro feito com leite condensado, chocolate e manteiga.' },
        { nome: 'Feijoada', descricao: 'Prato típico brasileiro com feijão preto, carnes e arroz.' },
        { nome: 'Arroz Carreteiro', descricao: 'Arroz com carne seca desfiada, cebola e cheiro-verde.' },
        { nome: 'Salada Caprese', descricao: 'Tomate, mussarela e manjericão regados com azeite e vinagre balsâmico.' },
        { nome: 'Espaguete à Bolonhesa', descricao: 'Massa com molho de carne moída e tomate.' },
        { nome: 'Frango Assado', descricao: 'Frango temperado assado no forno com batatas.' },
        { nome: 'Sopa de Legumes', descricao: 'Sopa leve com batata, cenoura, abóbora e temperos.' },
        { nome: 'Tapioca', descricao: 'Massa fina feita com goma de tapioca, recheada com queijo ou doce.' }
    ];

    localStorage.setItem('receitas', JSON.stringify(receitas));
}


// Pega elementos importantes
const barraPesquisa = document.getElementById('barraPesquisa');
const resultadoBusca = document.getElementById('resultadoBusca');
const modalAdd = document.getElementById('modalAdd');
const nomeReceitaInput = document.getElementById('nomeReceita');
const descricaoReceitaInput = document.getElementById('descricaoReceita');

// Exibe todas as receitas inicialmente
exibirReceitas(receitas);

// Quando o usuário digita na barra de busca
barraPesquisa.addEventListener('input', () => {
    const termo = barraPesquisa.value.toLowerCase();

    // Filtra receitas pelo nome ou descrição que contenha o termo buscado
    const filtradas = receitas.filter(r => 
        r.nome.toLowerCase().includes(termo) || 
        r.descricao.toLowerCase().includes(termo)
    );

    exibirReceitas(filtradas);
});

// Função para mostrar receitas na tela
function exibirReceitas(lista) {
    resultadoBusca.innerHTML = '';

    if (lista.length === 0) {
        resultadoBusca.innerHTML = '<p>Nenhuma receita encontrada.</p>';
        return;
    }

    lista.forEach(r => {
        const div = document.createElement('div');
        div.classList.add('receita-item');
        div.innerHTML = `<h3>${r.nome}</h3><p>${r.descricao}</p>`;
        resultadoBusca.appendChild(div);
    });
}

// Abre o modal para adicionar receita
function adicionarReceita() {
    nomeReceitaInput.value = '';
    descricaoReceitaInput.value = '';
    modalAdd.style.display = 'flex';
}

// Fecha o modal
function fecharModal() {
    modalAdd.style.display = 'none';
}

// Salva receita nova
function salvarReceita() {
    const nome = nomeReceitaInput.value.trim();
    const descricao = descricaoReceitaInput.value.trim();

    if (!nome || !descricao) {
        alert('Por favor, preencha nome e descrição.');
        return;
    }

    // Adiciona no array receitas
    receitas.push({ nome, descricao });

    // Salva no localStorage (converter para string)
    localStorage.setItem('receitas', JSON.stringify(receitas));

    // Atualiza lista na tela
    exibirReceitas(receitas);

    // Fecha modal
    fecharModal();
}

const listaTarefasEl = document.querySelector('#lista-tarefas');

class Tarefa {
    constructor(nome, categoria, realizada){
        this.nome = nome;
        this.categoria = categoria;
        this.realizada = realizada;
    }
    adicionaNaLista(){
        const node = document.createElement('li');
        node.classList.add('item-tarefa');
        node.classList.add(`categoria-${this.categoria}`);
        if(this.realizada)
            node.classList.add('marcado');
        node.innerHTML = this.nome;
        
        listaTarefasEl.appendChild(node);
        node.addEventListener('click', () => {
            node.classList.toggle('marcado');
        });
    }
}

tarefas = [
    new Tarefa('Comprar leite', 'compras', false),
    new Tarefa('Comprar biscoito', 'compras', false),
    new Tarefa('Comprar azeite', 'compras', false),
    new Tarefa('Comprar fralda', 'compras', true),

    new Tarefa('Escutar rock', 'lazer', false),
    new Tarefa('Danlar', 'lazer', true),
    new Tarefa('Passar em Web', 'lazer', true),
    new Tarefa('Escutar chimbinha', 'lazer', true),

    new Tarefa('Estudar Web', 'estudos', false),
    new Tarefa('Estudar RI', 'estudos', false),
    new Tarefa('Estudar TCC', 'estudos', false),
    new Tarefa('Estudar CG', 'estudos', true),
];
listaTarefasEl.innerHTML = '';
tarefas.forEach(tarefa => tarefa.adicionaNaLista());

const botaoCriarEl = document.querySelector('#incluir-nova-tarefa');
const novaTarefaNomeEl = document.querySelector('#nova-tarefa-nome');
const novaTarefaCategoriaEl = document.querySelector('#nova-tarefa-categoria');

function adicionaTarefa() {

        const tarefaNova =  new Tarefa(novaTarefaNomeEl.value, novaTarefaCategoriaEl.value);
        tarefas.push(tarefaNova);
        tarefaNova.adicionaNaLista();
        novaTarefaNomeEl.value = '';
        novaTarefaNomeEl.focus();
    
    
}

botaoCriarEl.addEventListener('click', adicionaTarefa);
novaTarefaNomeEl.addEventListener('keyup', ev => ev.key == 'Enter' ? adicionaTarefa() : null);

const filtroEl = document.querySelector('#filtro-de-categoria');
filtroEl.addEventListener('change', () => {
    const categoriaEscolhida = filtroEl.value;
    const tarefasNoHtml =  document.querySelectorAll('#lista-tarefas > li'); 
    console.log(tarefasNoHtml);
    tarefas.forEach((tarefa, index) => {
        tarefa.categoria === categoriaEscolhida ? tarefasNoHtml[index].classList.remove('retido-no-filtro') :  tarefasNoHtml[index].classList.add('retido-no-filtro');
    })
});

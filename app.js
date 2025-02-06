//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
listaAmigos = []; //cria a lista de amigos em branco

//função para limpar o campo depois de digitar o nome do amigo
function limparCampo() { 
   document.querySelector('#amigo').value = '';
}

//funçao para adicionar o amigo depois de clicar no botão adicionar
function adicionarAmigo() {
    let nome = document.querySelector('#amigo').value.trim();
    if (nome == '') {
        alert ('Favor digitar um nome válido!');

    } if (listaAmigos.includes(nome)) {
        alert ('Esse nome já consta na lista.');
        limparCampo();
    } else {
        listaAmigos.push(nome);
        limparCampo();
        atualizarLista();
        console.log(listaAmigos)
    }
}

//função para atualizar a exibição da lista de amigos
function atualizarLista() {
    let listaHTML = document.querySelector('#listaAmigos');
    listaHTML.innerHTML = ''; 
    listaAmigos.forEach(function(amigo) {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaHTML.appendChild(li);
    });
}

//função para sortear um amigo da lista e exibir o resultado
function sortearAmigo() {
    if (listaAmigos.length == 0) {
        alert ('A lista está vazia, não é possível fazer o sorteio');
    } else {
    let indiceLista = Math.floor(Math.random() * listaAmigos.length);
    let resultadoHTML = document.querySelector('#resultado');
    resultado = listaAmigos[indiceLista];
    resultadoHTML.textContent = resultado;
    console.log(indiceLista, resultado);
  
}}

console.log(listaAmigos);

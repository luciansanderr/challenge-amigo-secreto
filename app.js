let listaNomes = [];

function adicionarAmigo() {
    let nome = validarInput(document.querySelector('input').value);
    if (nome) {
        if (!validarExistencia(nome)) {
            listaNomes.push(nome);
            atualizarLista();
        }
    }
};

function validarInput(value) {
    if (value.length === 0) {
        document.querySelector('input').setAttribute('required', 'required');
        document.getElementById("msg").textContent = 'Ops! Digite um nome!';
        return;
    }
    document.getElementById("msg").textContent = '';
    return value;
}

function validarExistencia(nome) {
    if (listaNomes.includes(nome)) {
        document.getElementById("msg").textContent = 'Ops! Já existe!';
        return true;
    }
}

function atualizarLista() {
    let ul = document.querySelector('ul');
    ul.innerHTML = '';
    listaNomes.forEach(nome => { 
        let li = document.createElement('li');
        li.textContent = nome + ',' 
        ul.appendChild(li);
    });
    document.querySelector('input').value = '';
}

function limpar() {
    listaNomes.splice(0, listaNomes.length);
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    document.querySelector('h1').innerText = "Amigo Secreto";
    document.getElementById('button-sortear').removeAttribute('disabled');
    document.getElementById('amigo').removeAttribute('disabled');
    document.getElementById('add').removeAttribute('disabled');
}

function sortearAmigo() {
    if (listaNomes.length > 0) {
        let numeroAleatorio = Math.floor(Math.random() * listaNomes.length);
        let escolhido = listaNomes[numeroAleatorio];
        let resultado = document.getElementById('resultado');
        resultado.textContent = "Parabéns " + escolhido;
        document.getElementById('button-sortear').setAttribute('disabled', 'disabled');
        document.getElementById('amigo').setAttribute('disabled', 'disabled');
        document.getElementById('add').setAttribute('disabled', 'disabled');
        document.querySelector('h1').innerText = "🎉 Você Ganhou! 🎉";
        document.getElementById('listaAmigos').innerHTML = '';
        lançarFogos();
    }
}

function lançarFogos() {
    confetti({
        particleCount: 300,
        spread: 90,
        origin: { y: 0.5 }
    });
}
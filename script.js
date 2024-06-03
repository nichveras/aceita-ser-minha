let botaoNao = document.querySelector('.btn-nao');
let botaoSim = document.getElementById("btn-sim");

document.getElementById("heart").style.display = "none";

botaoNao.addEventListener('mouseover', function() {
    move(this);
});

// Função que faz o botão ficar movendo
function move(el) {
    let div = document.getElementsByClassName("container-button")[0];

    let width = Math.ceil(el.clientWidth);
    let height = Math.ceil(el.clientHeight);

    let wdh = Math.floor(div.clientHeight);
    let wdw = Math.floor(div.clientWidth);

    let changeTop = Math.floor((Math.random() * (wdh - height)));
    let changeLeft = Math.floor((Math.random() * (wdw - width)));
    console.log("Height: " + changeTop + " Width: " + changeLeft);

    el.style.marginTop = changeTop + "px";
    el.style.marginLeft = changeLeft + "px";
}

botaoSim.addEventListener('click', function() {
    document.getElementById("botao").classList.remove("move");

    setHeart();
    showMessage();
    changeTitle();
});

function setHeart() {
    document.getElementById("botao").style.display = "none";
    document.querySelector('.btn-nao').style.display = "none";
    document.getElementById("heart").style.display = "block";
    playSong();
}

function playSong() {
    let snd = new Audio("love.mp3");
    snd.play();
}

function showMessage() {
    const message = document.createElement('div');
    message.className = 'message';
    message.innerText = 'O meu coração é teu';
    document.body.appendChild(message);
    message.style.display = 'block';
}

function changeTitle() {
    document.getElementById('titulo').innerText = 'Agora vai ter que me aturar para sempre! Eu te amo!';
}

function adicionaDiv() {
    // Função adicionada para compatibilidade
}

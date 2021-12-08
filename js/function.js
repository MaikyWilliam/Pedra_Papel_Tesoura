const elementos = document.querySelectorAll('.player-options div > img');
const enemyOptions = document.querySelectorAll('.enemy-options div > img');

var playerOpt = "";
var enemyOpt = "";
var winnerPlayer = 0;
var winnerEnemy = 0;
var gamesVictories = 0;
var gamesOver = 0;
var gamesempate = 0;

function result() {
    let gamesVictoriesDiv = document.querySelector('.vitorias');
    let gamesOverDiv = document.querySelector('.derrotas');
    let gamesempateDiv = document.querySelector('.empates');

    let vencedor = document.querySelector('.vencedor h2');
    let classVencedor = document.querySelector('.vencedor');
    let games = 0;
    classVencedor.style.display = "none";
    classVencedor.style.backgroundColor = "#ccc";

    if(playerOpt == "pedra"){
        if(enemyOpt == "tesoura"){
            games = 1;
            classVencedor.style.backgroundColor = "#36b61d42";
            classVencedor.style.display = "block";
            vencedor.innerHTML = "VOCÊ GANHOU!"
        }else if(enemyOpt == "papel"){
            games = 2;
            classVencedor.style.backgroundColor = "#dd121242";
            classVencedor.style.display = "block";
            vencedor.innerHTML = "VOCÊ PERDEU!";
        }else{
            games = 3;
            classVencedor.style.display = "block";
            vencedor.innerHTML = "EMPATOU";
        }
    }else if(playerOpt == "papel"){
        if(enemyOpt == "pedra"){
            games = 1;
            classVencedor.style.backgroundColor = "#36b61d42";
            classVencedor.style.display = "block";
            vencedor.innerHTML = "VOCÊ VENCEU!";
        }else if(enemyOpt == "tesoura"){
            games = 2;
            classVencedor.style.backgroundColor = "#dd121242";
            classVencedor.style.display = "block";
            vencedor.innerHTML = "VOCÊ PERDEU!";
        }else{
            games = 3;
            classVencedor.style.display = "block";
            vencedor.innerHTML = "EMPATOU";
        }
    }else if(playerOpt == "tesoura"){
        if(enemyOpt == "papel"){
            games = 1;
            classVencedor.style.backgroundColor = "#36b61d42";
            classVencedor.style.display = "block";
            vencedor.innerHTML = "VOCÊ VENCEU!";
        }else if(enemyOpt == "pedra"){
            games = 2;
            classVencedor.style.backgroundColor = "#dd121242";
            classVencedor.style.display = "block";
            vencedor.innerHTML = "VOCÊ PERDEU!";
        }else{
            games = 3;
            classVencedor.style.display = "block";
            vencedor.innerHTML = "EMPATOU";
        }
    }

    if(games == 1){
        gamesVictories += 1;
        console.log(gamesVictories);
        gamesVictoriesDiv.innerHTML = "Vitorias: " + gamesVictories;
    }else if(games == 2){
        gamesOver += 1;
        gamesOverDiv.innerHTML = "Derrotas: " + gamesOver;
    }else{
        gamesempate += 1;
        gamesempateDiv.innerHTML = "Empates: " + gamesempate;
    }
    
}
function resetInimigo() {
    const enemyOptions = document.querySelectorAll('.enemy-options div > img');
    for (let i = 0; i < enemyOptions.length; i++) {
        enemyOptions[i].style.opacity = 0.3;
    }
}

function inimigoJogar() {
    let rand = Math.floor(Math.random()*3);

    const enemyOptions = document.querySelectorAll('.enemy-options div > img');
    resetInimigo();
    for (let i = 0; i < enemyOptions.length; i++) {
        if (i == rand){
            enemyOptions[i].style.opacity = 1;
            enemyOpt = enemyOptions[i].getAttribute('opt');
        }
    }

    // alert(playerOpt);
    // alert(enemyOpt);
}

function resetOpacity() {
    
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].style.opacity = 0.3;
    }
}
for (let i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('click', (res)=>{
        resetOpacity();
        res.target.style.opacity = 1;
        playerOpt = res.target.getAttribute('opt');
        inimigoJogar();
        
        result();
    })
    
}
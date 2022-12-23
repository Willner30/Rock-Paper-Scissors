const trianglePlayer = document.getElementById("triangleImg2");
const rockPlayer = document.getElementById("rockImg2");
const paperPlayer = document.getElementById("paperImg2");
const scissorsPlayer = document.getElementById("scissorsImg2");
const triangleCPU = document.getElementById("triangleImg");
const rockCPU = document.getElementById("rockImg");
const paperCPU = document.getElementById("paperImg");
const scissorsCPU = document.getElementById("scissorsImg");
const result = document.getElementById("result");
const cpuScore = document.getElementById("cpuScore");
const playerScore = document.getElementById("playerScore");
var cpuTurn = Math.floor(Math.random() * 3);
var currentScorePlayer = 0;
var currentScoreCPU = 0;

function playerPlaysRock () {
    paperPlayer.style.display = 'none';
    scissorsPlayer.style.display = 'none';
    trianglePlayer.style.display = 'none';
    rockPlayer.style.transform = "scale(2)";
    rockPlayer.style.transition = "transform 0.75s ease";
    cpuPlay();
    whoWon();
}

function playerPlaysPaper () {
    rockPlayer.style.display = 'none';
    scissorsPlayer.style.display = 'none';
    trianglePlayer.style.display = 'none';
    paperPlayer.style.transform = "scale(2)";
    paperPlayer.style.transition = "transform 0.75s ease";
    cpuPlay();
    whoWon();
}

function playerPlaysScissors () {
    paperPlayer.style.display = 'none';
    rockPlayer.style.display = 'none';
    trianglePlayer.style.display = 'none';
    scissorsPlayer.style.transform = "scale(2)";
    scissorsPlayer.style.transition = "transform 0.75s ease";
    cpuPlay();
    whoWon();
}

function restart () {
    trianglePlayer.style.display = 'block';
    rockPlayer.style.display = 'block';
    rockPlayer.style.transform = "scale(1)";
    rockPlayer.style.transition = "transform 0.75s ease";
    paperPlayer.style.display = 'block';
    paperPlayer.style.transform = "scale(1)";
    paperPlayer.style.transition = "transform 0.75s ease";
    scissorsPlayer.style.display = 'block';
    scissorsPlayer.style.transform = "scale(1)";
    scissorsPlayer.style.transition = "transform 0.75s ease";
    triangleCPU.style.display = 'block';
    rockCPU.style.display = 'block';
    rockCPU.style.transform = "scale(1)";
    rockCPU.style.transition = "transform 0.75s ease";
    paperCPU.style.display = 'block';
    paperCPU.style.transform = "scale(1)";
    paperCPU.style.transition = "transform 0.75s ease";
    scissorsCPU.style.display = 'block';
    scissorsCPU.style.transform = "scale(1)";
    scissorsCPU.style.transition = "transform 0.75s ease";
    result.innerHTML = ""; 
    rockPlayer.style.pointerEvents = 'initial';
    paperPlayer.style.pointerEvents = 'initial';
    scissorsPlayer.style.pointerEvents = 'initial';
}

function cpuPlay () {

    if (cpuTurn === 0){
        paperCPU.style.display = 'none';
        scissorsCPU.style.display = 'none';
        triangleCPU.style.display = 'none';
        rockCPU.style.transform = "scale(2)";
        rockCPU.style.transition = "transform 0.75s ease";
    }
    
    if (cpuTurn === 1) {
        rockCPU.style.display = 'none';
        scissorsCPU.style.display = 'none';
        triangleCPU.style.display = 'none';
        paperCPU.style.transform = "scale(2)";
        paperCPU.style.transition = "transform 0.75s ease";
    }
    
    if (cpuTurn === 2) {
        paperCPU.style.display = 'none';
        rockCPU.style.display = 'none';
        triangleCPU.style.display = 'none';
        scissorsCPU.style.transform = "scale(2)";
        scissorsCPU.style.transition = "transform 0.75s ease";
    }

}

function drawMessage () {
    result.style.transition = "transform 0.75s ease";
    result.innerHTML = "It's a Draw!!";
    cpuTurn = Math.floor(Math.random() * 3); 
}

function winMessage () {
    result.style.transition = "transform 0.75s ease";
    result.innerHTML = "You win!!"; 
    currentScorePlayer++;
    playerScore.innerHTML = currentScorePlayer; 
    cpuTurn = Math.floor(Math.random() * 3);
}

function loseMessage () {
    result.style.transition = "transform 0.75s ease";
    result.innerHTML = "You lose :/"; 
    currentScoreCPU++;
    cpuScore.innerHTML = currentScoreCPU; 
    cpuTurn = Math.floor(Math.random() * 3);
}

function whoWon () {

    if ((cpuTurn === 0) && (rockPlayer.style.display === 'block')){
        rockPlayer.style.pointerEvents = 'none';
        drawMessage();
    } else if ((cpuTurn === 1) && (paperPlayer.style.display === 'block')){
        paperPlayer.style.pointerEvents = 'none';
        drawMessage();
    } else if ((cpuTurn === 2) && (scissorsPlayer.style.display === 'block')){
        scissorsPlayer.style.pointerEvents = 'none';
        drawMessage();
    } else if ((cpuTurn === 0) && (paperPlayer.style.display === 'block')){
        paperPlayer.style.pointerEvents = 'none';
        winMessage();
    } else if ((cpuTurn === 0) && (scissorsPlayer.style.display === 'block')){
        scissorsPlayer.style.pointerEvents = 'none';
        loseMessage();
    } else if ((cpuTurn === 1) && (rockPlayer.style.display === 'block')){
        rockPlayer.style.pointerEvents = 'none';
        loseMessage();
    } else if ((cpuTurn === 1) && (scissorsPlayer.style.display === 'block')){
        scissorsPlayer.style.pointerEvents = 'none';
        winMessage();
    } else if ((cpuTurn === 2) && (rockPlayer.style.display === 'block')){
        rockPlayer.style.pointerEvents = 'none';
        winMessage();
    } else if ((cpuTurn === 2) && (paperPlayer.style.display === 'block')){
        paperPlayer.style.pointerEvents = 'none';
        loseMessage();
    }
}
let trianglePlayer = document.getElementById("triangleImg2");
let rockPlayer = document.getElementById("rockImg2");
let paperPlayer = document.getElementById("paperImg2");
let scissorsPlayer = document.getElementById("scissorsImg2");
let triangleCPU = document.getElementById("triangleImg");
let rockCPU = document.getElementById("rockImg");
let paperCPU = document.getElementById("paperImg");
let scissorsCPU = document.getElementById("scissorsImg");
var cpuTurn = Math.floor(Math.random() * 3);

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
    window.location.reload();
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

function whoWon () {

    if ((cpuTurn === 0) && (rockPlayer.style.display === 'block')){
        alert("It's a Draw!!");
    } else if ((cpuTurn === 1) && (paperPlayer.style.display === 'block')){
        alert("It's a Draw!!");
    } else if ((cpuTurn === 2) && (scissorsPlayer.style.display === 'block')){
        alert("It's a Draw!!");
    } else if ((cpuTurn === 0) && (paperPlayer.style.display === 'block')){
        alert("You win!!");
    } else if ((cpuTurn === 0) && (scissorsPlayer.style.display === 'block')){
        alert("You lose :/");
    } else if ((cpuTurn === 1) && (rockPlayer.style.display === 'block')){
        alert("You lose :/");
    } else if ((cpuTurn === 1) && (scissorsPlayer.style.display === 'block')){
        alert("You win!!");
    } else if ((cpuTurn === 2) && (rockPlayer.style.display === 'block')){
        alert("You win!!");
    } else if ((cpuTurn === 2) && (paperPlayer.style.display === 'block')){
        alert("You lose :/");
    } else {
        return;
    }

}
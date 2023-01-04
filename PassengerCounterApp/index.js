let a = document.getElementById("count-el");
let s = document.getElementById("results")
let count = 0;

function incriment(){
    count = count+1;
    a.innerText = count;
}

function decriment (){
    count = count-1;
    a.innerText = count
}

function reset(){
    count = 0
    a.innerText = count
    s.innerText = "Previos entries : "
}

function save(){
    let countStr =+ count + " - "
    s.innerText += countStr  
}
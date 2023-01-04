let a = document.getElementById("count-el");
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
    a.innerHTML = count
}

function save(){
    console.log(count)
}
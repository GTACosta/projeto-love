var b = document.querySelector("#movingbutton");
b.addEventListener("click",change);

function change() {
let i = Math.floor(Math.random()*500)+1;
let j = Math.floor(Math.random()*500)+1;
console.log('here' , i ,j , b.style.left , b.style.top);
    b.style.left = i+'px';
    b.style.top = j + "px";
}

var a = document.querySelector("#stadybutton");
a.addEventListener("click",alerta);

function alerta() {
    window.alert("Perfeita escolha, agora é so pedir meu número!");
};
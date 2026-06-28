// var matrix animation
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");
// var type animation
var text = document.getElementById("text")
var isi = "HAPPY BIRTH DAY SAYAANG!!"
var isi2 = "I LOVE YOU FOREVER"
var next = false
var i = 0
var a = 0
var b = 0

// matrix animation
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [
    "❤","💕","💖","💗","💘","💝","💞"
];

const fontSize = 24;
const columns = Math.floor(canvas.width / fontSize);

const drops = [];

for(let i=0;i<columns;i++){
    drops[i] = Math.random() * -100;
}

function draw(){
    ctx.fillStyle = "rgba(0,0,0,0.15)";;
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "#ff4d88";
    ctx.font = `${fontSize}px Arial`;

    for(let i=0;i<drops.length;i++){

        const text =
            hearts[Math.floor(Math.random() * hearts.length)];

        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text,x,y);

        if(
            y > canvas.height &&
            Math.random() > 0.97
        ){
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(draw,50);

window.addEventListener("resize",()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// type animation

setInterval(function(){
  if(next){
    typing(isi2,false)
  }
  else{
    typing(isi, true)
  }
}, 100)

function typing(value, kondisi){
  if(i< value.length){
    text.innerHTML += value.charAt(i)
    i++
  }
  else if(i == value.length){
    var hapus = value.substring(0 , value.length- a)
    text.innerHTML = hapus
    b++ 
    if(b > 10){
      a++
    }
    if(a == value.length + 1){
      i += 1
    }
  }
  else if(a == value.length +1){
    i = 0
    a= 0
    b=0
    next = kondisi
  }
}

const canvas = document.getElementById("heart");
const ctx = canvas.getContext("2d");

function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resize();
window.addEventListener("resize", resize);

let t = 0;

function draw(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    const gradient =
    ctx.createLinearGradient(
        0,0,
        canvas.width,
        canvas.height
    );

    gradient.addColorStop(0,"#ff0066");
    gradient.addColorStop(1,"#ff99cc");

    ctx.fillStyle = gradient;
    ctx.font = "14px Arial";

    const scale =
        14 + Math.sin(t) * 2;

    for(let a=0; a<Math.PI*2; a+=0.05){

        const x =
            16 * Math.pow(Math.sin(a),3);

        const y =
            -(13*Math.cos(a)
            -5*Math.cos(2*a)
            -2*Math.cos(3*a)
            -Math.cos(4*a));

        const px =
            canvas.width/2 + x * scale;

        const py =
            canvas.height/2 + y * scale;

        ctx.save();

        ctx.translate(px,py);

        ctx.rotate(a);

        ctx.fillText(
            "I LOVE YOU",
            0,
            0
        );

        ctx.restore();
    }

    t += 0.05;

    requestAnimationFrame(draw);
}

draw();
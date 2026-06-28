
const container = document.getElementById("container");

/*
Masukin foto-foto kalian di sini
*/
const path = "her/"
const photos = [];

listfoto(photos,10,"jpeg")
listfoto(photos,10,"jpg")

function listfoto(foto,q,type){
    let putin
    for(let i = 1; i<q;i++){
        putin = path+"foto ("+i+")."+type
        foto.push(putin)
    }
    console.log(putin)
}

// loading screen
const loadingScreen =
document.getElementById("loading");

const progressText =
document.getElementById("progress");

let loaded = 0;

function preloadImages(images){

    return Promise.all(
        images.map(src => {

            return new Promise(resolve => {

                const img = new Image();

                img.onload = () => {

                    loaded++;

                    const percent =
                    Math.round(
                        loaded / images.length * 100
                    );

                    progressText.textContent =
                    percent + "%";

                    resolve();
                };

                img.onerror = () => {

                    loaded++;

                    const percent =
                    Math.round(
                        loaded / images.length * 100
                    );

                    progressText.textContent =
                    percent + "%";

                    resolve();
                };

                img.src = src;

            });

        })
    );

}

preloadImages(photos)
.then(() => {

    loadingScreen.innerHTML = `
    <h1>Happy Birthday ❤️</h1>
    <p>Everything is ready...</p>
    `;
    setTimeout(() => {
        loadingScreen.classList.add("hide");
    }, 2000);

    setTimeout(() => {
        loadingScreen.remove();

        // START ANIMATION
        setInterval(spawnPhoto, 1800);

    }, 2800);

});

// animasi spawn foto
function spawnPhoto(){

    const img = document.createElement("img");

    img.src =
    photos[Math.floor(Math.random()*photos.length)];

    img.classList.add("photo");

    const size =
    80 + Math.random() * 220;

    const x =
    Math.random() * (window.innerWidth - size);

    const y =
    Math.random() * (window.innerHeight - size);

    const rotation =
    -35 + Math.random() * 70;

    img.style.width = size + "px";
    img.style.height = size + "px";

    img.style.left = x + "px";
    img.style.top = y + "px";

    img.style.transform =
        `rotate(${rotation}deg)`;
        img.style.setProperty(
        "--rot",
        `${rotation}deg`
    );

    container.appendChild(img);

    setTimeout(()=>{
        img.remove();
    },6000);
}
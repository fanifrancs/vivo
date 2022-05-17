const themeicon = document.querySelector('#themeicon');
const theme = document.querySelector('link');
const imgs = document.getElementById('imgs');
const img = document.querySelectorAll('#imgs img');
const downloadBtn = document.querySelector('.download');

let idx = 0;

themeicon.addEventListener('click', changeTheme);
downloadBtn.addEventListener('click', getVivo);

//image carousel interval
setInterval(run, 2000);

function changeTheme() {
    if (theme.getAttribute('href') == 'light.css') {
        theme.setAttribute('href', 'dark.css');
        themeicon.setAttribute('class', 'fas fa-sun');
    } else {
        theme.setAttribute('href', 'light.css');
        themeicon.setAttribute('class', 'fas fa-moon');
    }
}

function getVivo() {
    location.assign(
        'https://www.mediafire.com/file/694rv948po5cfoj/Vivo_%25282021%2529_uploaded_by_Francisco.mp4/file'
    );
}

//image carousel code
function run() {
    idx++;
    changeImage();
}

function changeImage() {
    if(idx > img.length - 1) {
        idx = 0;
    } else if(idx < 0) {
        idx = img.length - 1;
    }
    imgs.style.transform = `translateX(${-idx * 500}px)`;
}

//music player code
const songs = [
    {
        name: 'one of a kind', 
        artiste: 'Vivo x Andres', 
        src: './songs/vivo one of a kind.aac', 
        img: `url('./img/logo.png')`
    },
    {
        name: 'my own drum', 
        artiste: 'Vivo x Gabi', 
        src: './songs/vivo my own drum.aac', 
        img: `url('./img/logo.png')`
    }
];
let controls = document.querySelectorAll('button');
let count = 0;
let title = document.querySelector('#title');
let artiste = document.querySelector('#artiste');
let music = document.createElement('audio');
let songImg = document.querySelector('#songimg');

music.src = songs[count].src;

controls[1].addEventListener('click', prev);
controls[2].addEventListener('click', playNpause);
controls[3].addEventListener('click', next);

function next(){
    count++;
    if (count == songs.length) {
        count = 0;
        music.src = songs[count].src;
        songImg.style.backgroundImage = songs[count].img;
        music.play();
        controls[2].innerHTML = '<i class="fa-solid fa-pause"></i>';
        songImg.style.animationPlayState = 'running';
        title.innerText = songs[count].name;
        artiste.innerText = songs[count].artiste;
    } else {
        music.src = songs[count].src;
        songImg.style.backgroundImage = songs[count].img;
        music.play();
        controls[2].innerHTML = '<i class="fa-solid fa-pause"></i>';
        songImg.style.animationPlayState = 'running';
        title.innerText = songs[count].name;
        artiste.innerText = songs[count].artiste;
    }
}

function prev(){
    count--;
    if (count == -1) {
        count = songs.length - 1;
        music.src = songs[count].src;
        songImg.style.backgroundImage = songs[count].img;
        music.play();
        controls[2].innerHTML = '<i class="fa-solid fa-pause"></i>';
        songImg.style.animationPlayState = 'running';
        title.innerText = songs[count].name;
        artiste.innerText = songs[count].artiste;
    } else {
        music.src = songs[count].src;
        songImg.style.backgroundImage = songs[count].img;
        music.play();
        controls[2].innerHTML = '<i class="fa-solid fa-pause"></i>';
        songImg.style.animationPlayState = 'running';
        title.innerText = songs[count].name;
        artiste.innerText = songs[count].artiste;
    }
}

function playNpause(){
    if (music.paused == true) {
        songImg.style.backgroundImage = songs[count].img;
        music.play();
        controls[2].innerHTML = '<i class="fa-solid fa-pause"></i>';
        songImg.style.animationPlayState = 'running';
        title.innerText = songs[count].name;
        artiste.innerText = songs[count].artiste;
        show();   
    } else {
        music.pause();
        controls[2].innerHTML = '<i class="fa-solid fa-play"></i>';
        songImg.style.animationPlayState = 'paused';
    }
}

function show() {
    controls[1].style.visibility = 'visible';
    controls[3].style.visibility = 'visible';
}

setInterval(() => {
    if (music.ended == true) {
        next();
    }
}, 1);
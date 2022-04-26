const themeicon = document.querySelector('#themeicon');
const theme = document.querySelector('link');
const imgs = document.getElementById('imgs');
const img = document.querySelectorAll('#imgs img');
const downloadBtn = document.querySelector('.download');
let idx = 0;
let interval = setInterval(run, 2000);

themeicon.addEventListener('click', changeTheme);
downloadBtn.addEventListener('click', getVivo);

function changeTheme(){
    if (theme.getAttribute('href') == 'light.css') {
        theme.setAttribute('href', 'dark.css');
        themeicon.setAttribute('class', 'fas fa-sun');
    } else {
        theme.setAttribute('href', 'light.css');
        themeicon.setAttribute('class', 'fas fa-moon');
    }
}

function getVivo(){
    location.href = 'https://www.mediafire.com/file/694rv948po5cfoj/Vivo_%25282021%2529_uploaded_by_Francisco.mp4/file';
}

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

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 2000);
}
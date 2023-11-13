let movingText = document.querySelector('#move-text');
let movingLine = document.querySelector('#move-line');
let mvVar = true

setInterval(() => {
    if (mvVar) {movingLine.style.display = 'none';}
    else {movingLine.style.display = 'block';}
    mvVar = !mvVar
}, 500);

writingText()
function writingText() {
    movingText.innerHTML = ''
    setTimeout(() => {movingText.innerHTML += 'D'}, 100);
    setTimeout(() => {movingText.innerHTML += 'e'}, 200);
    setTimeout(() => {movingText.innerHTML += 's'}, 300);
    setTimeout(() => {movingText.innerHTML += 'a'}, 400);
    setTimeout(() => {movingText.innerHTML += 'r'}, 500);
    setTimeout(() => {movingText.innerHTML += 'r'}, 600);
    setTimeout(() => {movingText.innerHTML += 'o'}, 700);
    setTimeout(() => {movingText.innerHTML += 'l'}, 800);
    setTimeout(() => {movingText.innerHTML += 'l'}, 900);
    setTimeout(() => {movingText.innerHTML += 'a'}, 1000);
    setTimeout(() => {movingText.innerHTML += 'd'}, 1100);
    setTimeout(() => {movingText.innerHTML += 'o'}, 1200);
    setTimeout(() => {movingText.innerHTML += 'r'}, 1300);
    setTimeout(() => {writingText()}, 5000);
}
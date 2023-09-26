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
    setTimeout(() => {movingText.innerHTML += 'W'}, 100);
    setTimeout(() => {movingText.innerHTML += 'e'}, 200);
    setTimeout(() => {movingText.innerHTML += 'b'}, 300);
    setTimeout(() => {movingText.innerHTML += '-'}, 400);
    setTimeout(() => {movingText.innerHTML += 'D'}, 500);
    setTimeout(() => {movingText.innerHTML += 'e'}, 600);
    setTimeout(() => {movingText.innerHTML += 'v'}, 700);
    setTimeout(() => {movingText.innerHTML += 'e'}, 800);
    setTimeout(() => {movingText.innerHTML += 'l'}, 900);
    setTimeout(() => {movingText.innerHTML += 'o'}, 1000);
    setTimeout(() => {movingText.innerHTML += 'p'}, 1100);
    setTimeout(() => {movingText.innerHTML += 'm'}, 1200);
    setTimeout(() => {movingText.innerHTML += 'e'}, 1300);
    setTimeout(() => {movingText.innerHTML += 'n'}, 1400);
    setTimeout(() => {movingText.innerHTML += 't'}, 1500);
    setTimeout(() => {movingText.innerHTML += ''}, 1600);
    setTimeout(() => {movingText.innerHTML += ''}, 1700);
    setTimeout(() => {movingText.innerHTML += ''}, 1800);
    setTimeout(() => {movingText.innerHTML += ''}, 1900);

    setTimeout(() => {writingText()}, 4000);
}
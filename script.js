//METHOD 1

let colors;

let color = document.querySelector('.color');
let colorBtn = document.getElementById('btn');

function changeBgColor() {
    return colors = '#' + Math.random().toString(16).substring(9);
}

colorBtn.addEventListener("click", () => {
    const randomColor = changeBgColor();
    document.body.style.backgroundColor = colors;
    color.textContent = colors; 
});

/*
METHOD 2
const colors = ['#fe3b32', '#83b348', '#25333e', '#ed802e', '#4cc9f0', '#f08080', '#fd4d4d', '#b8860b', '#ff7f50', '#9acd32', '#db7093', '#2fafaf'];

let color = document.querySelector('.color');
let colorBtn = document.getElementById('btn');

function changeBgColor() {
    return Math.floor(Math.random() * colors.length);
}

colorBtn.addEventListener("click", () => {
    const randomColor = changeBgColor();
    document.body.style.backgroundColor = colors[randomColor];
    color.textContent = colors[randomColor]; 
});
*/
//generate a random color
const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = '#';
    for(let i = 0; i < 6; i++){
        let randVal = Math.floor(Math.random() * 16);
        color += hex[randVal];
    }
    return color;
}
console.log(randomColor());

let intervalId;
const startChangingColor = function(){
    intervalId = setInterval(() => {
        document.body.style.backgroundColor = randomColor();
    }, 2000);
}
const stopChangingColor = function(){
    clearInterval(intervalId);
}

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);
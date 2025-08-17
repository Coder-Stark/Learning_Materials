const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock');   //same as above

setInterval(()=>{
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)
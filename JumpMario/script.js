const Mario = document.querySelector('#mario');
const pipe = document.querySelector('#pipe')

function jump() {
    Mario.classList.add('jump')
    setTimeout(() => {
        Mario.classList.remove('jump')
    }, 700)
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    
    if(pipePosition <= 101) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`
    }
    
}, 10)


window.addEventListener('keydown',(event) => {
    if(event.code == 'Space' || event.code == 'ArrowUp') {
        jump()
    }
})

const Mario = document.querySelector('#mario');
const pipe = document.querySelector('#pipe');
const marioJump = document.querySelector('#jump');
const marioDead = document.querySelector('#dead')

function jump() {
    Mario.classList.add('jump')
    marioJump.currentTime = 0;
    marioJump.play()
    setTimeout(() => {
        Mario.classList.remove('jump')
    }, 700)
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;

    // o simbolo de + converte a string para number. o get pega todo css aplicado do componente.
    const marioPosition = +window.getComputedStyle(Mario).bottom.replace('px', '');
    
    if(pipePosition <= 101 && pipePosition > 0 && marioPosition < 80 ) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        Mario.style.animation = 'none'
        Mario.style.bottom = `${marioPosition}px`
       
        Mario.src = 'assets/game-over.png'
        Mario.style.width = '4rem'
        Mario.style.marginLeft = '50px'

        marioDead.currentTime = -1;
        marioDead.play();

        clearInterval(loop);
    }
    
}, 10)


window.addEventListener('keydown',(event) => {
    if(event.code == 'Space' || event.code == 'ArrowUp') {
        jump()
    }
})

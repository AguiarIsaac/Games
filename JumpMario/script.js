const Mario = document.querySelector('#mario');

window.addEventListener('keydown', (event) => {
    if(event.code == 'Space') {
        Mario.classList.add('marioJump')
        setInterval(() => {Mario.classList.remove('marioJump')}, 2000)
    }
})
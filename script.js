const sounds = ['donkey', 'monkey', 'hungry', 'ape', 'monstar', 'birds', 'shaman','alien']

sounds.forEach (sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopPlay();
        document.getElementById(sound).play()
    })
    document.getElementById('buttons').appendChild(btn);
})

const stopPlay = () => {
    sounds.forEach(sound => {
        const currentPlayer = document.getElementById(sound)
        currentPlayer.pause()
    })
}
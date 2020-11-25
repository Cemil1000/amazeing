document.querySelector('.main').innerHTML='';
const main = document.querySelector('.main');

const multiline = `***********.*
*S.....**.*.T
*****.....*.*
*****.***.*.*
*****.*****.*
*****.*****.*
*****.......*
*****.*******
*.........***
*.******...**
*....********`

const allLaby = document.createElement('div')
    allLaby.className='tile'
    main.appendChild(allLaby)

const player = document.createElement('div')
    player.className = 'player'

for (let i = 0; i < multiline.length; i++) {
    if (multiline[i].split('')=='*') {
        const mur = document.createElement('div')
        mur.className = 'mur'
        allLaby.appendChild(mur)
    }
    else if (multiline[i].split('')=='.') {
        const route = document.createElement('div')
        route.className = 'route'
        allLaby.appendChild(route)
    }
    else if (multiline[i].split('')=='S') {
        const start = document.createElement('div')
        start.className = 'start'
        allLaby.appendChild(start)
        
    }
    else if (multiline[i].split('')=='T') {
        const finish = document.createElement('div')
        finish.className = 'finish'
        allLaby.appendChild(finish)
        let end = i
        console.log(end);
    }
}

document.querySelector("body > main > div > div.start").appendChild(player)
let playerpos = 15

function bougetop() {
    let play = playerpos - 13
    if (document.querySelector("body > main > div div:nth-child("+play+")").classList.contains('route','finish')) {
        playerpos = play
        document.querySelector("body > main > div div:nth-child("+playerpos+")").appendChild(player)
    }
    else{
        console.log('il y a un mur');
    }
}

function bougeright() {
    let play = playerpos + 1
    if (document.querySelector("body > main > div div:nth-child("+play+")").classList.contains('route')) {
        playerpos++
        document.querySelector("body > main > div div:nth-child("+playerpos+")").appendChild(player)
    }
    else if (document.querySelector("body > main > div div:nth-child("+play+")").classList.contains('finish')) {
        playerpos++
        document.querySelector("body > main > div div:nth-child("+playerpos+")").appendChild(player)
    }
    else{
        console.log('il y a un mur');
    }
}

function bougeleft() {
    let play = playerpos - 1
    if (document.querySelector("body > main > div div:nth-child("+play+")").classList.contains('route','finish')) {
        playerpos--
        document.querySelector("body > main > div div:nth-child("+playerpos+")").appendChild(player)
    }
    else{
        console.log('il y a un mur');
    }
}

function bougebot() {
    console.log(playerpos);
    let play = playerpos + 13
    if (document.querySelector("body > main > div div:nth-child("+play+")").classList.contains('route','finish')) {
        playerpos = play
        document.querySelector("body > main > div div:nth-child("+playerpos+")").appendChild(player)
    }
    else{
        console.log('il y a un mur');
    }
}

document.body.addEventListener('keyup', function (e) {
    if (e.key == 'z') {
        bougetop()
    }
    if (e.key == 'd') {
        bougeright()
    }
    if (e.key == 'q') {
        bougeleft()
    }
    if (e.key == 's') {
        bougebot()
    }
    if (playerpos == 26) {
        alert('fin')    
    }
})
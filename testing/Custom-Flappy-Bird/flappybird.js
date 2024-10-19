//board
let board = document.getElementById('board')
let boardWidth = 360;
let boardHeight = 640;
let context

//bird
let birdWidth = 34;
let birdHeight = 24;
let birdX = boardWidth / 8;
let birdY = boardHeight / 2;
let birdImage

let dx = 0.001

let bird = {
    x : birdX,
    y : birdY,
    width : birdWidth,
    height : birdHeight,
    movingLeft : false,
    movingRight : false
}

//pipes
let pipeArray = []
let pipeWidth = 64;
let pipeHeight = 512
let pipeX = board.width
let pipeY = 0

let topPipeImg
let bottomPipeImg

//physics
let velocityX = -2
let birdVelocityX = 5;
let velocityY = 0;
let gravity = 0.2

let gameOver = false
let score = 0

window.onload = function() {
    board.height = boardHeight
    board.width = boardWidth
    context = board.getContext('2d') //draw on the board

    birdImage = new Image()
    birdImage.src = './flappybird.png'
    birdImage.onload = () => context.drawImage(birdImage, bird.x, bird.y, bird.width, bird.height)

    topPipeImg = new Image()
    topPipeImg.src = './toppipe.png'

    bottomPipeImg = new Image()
    bottomPipeImg.src = './bottompipe.png'

    requestAnimationFrame(update)
    setInterval(placePipes, 1500)
    document.addEventListener('keydown', movebird)
    document.addEventListener('keyup', cancelBirdHorizontal);
}

function update() {
    requestAnimationFrame(update)
    if (gameOver) {
        return
    }
    context.clearRect(0,0, board.width, board.height)


    velocityY += gravity
    bird.y = Math.max(bird.y + velocityY, 0)
    if (bird.movingLeft) bird.x = Math.max(bird.x - birdVelocityX, 0)
    if (bird.movingRight) bird.x = Math.min(bird.x + birdVelocityX, board.width - birdWidth)

    context.drawImage(birdImage, bird.x, bird.y, bird.width, bird.height)

    for (let i = 0; i < pipeArray.length; i++) {
        let pipe = pipeArray[i];
        pipe.x += velocityX
        context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height)

        if (!pipe.passed && bird.x > pipe.x + pipe.width) {
            pipe.passed = true
            score += 0.5
        }

        if(detectCollision(bird, pipe)) {
            gameOver=true;
        }
    }

    while(pipeArray.length > 0 && pipeArray[0].x < 0 + pipeArray.width) {
        pipeArray.shift()
    }

    if (bird.y + bird.height >= board.height) {
        gameOver=true
    }

    context.fillStyle = 'white'
    context.font = '45px sans-serif'
    context.fillText(score, 5, 45)

    if (gameOver) {
        context.fillText('GAME OVER', 5, 90)
    }
}

function placePipes() {
    if (gameOver) {
        return
    }

    let randomPipeY = pipeY - pipeHeight/4 - Math.random()*(pipeHeight/2)
    let openingSpace = board.height/4

    let topPipe = {
        img : topPipeImg,
        x : pipeX,
        y : randomPipeY,
        width : pipeWidth,
        height : pipeHeight,
        passed: false
    }
    pipeArray.push(topPipe)

    let bottomPipe = {
        img : bottomPipeImg,
        x : pipeX,
        y : randomPipeY + pipeHeight + openingSpace,
        width : pipeWidth,
        height : pipeHeight,
        passed: false
    }
    pipeArray.push(bottomPipe)
}

function movebird(e) {
    if (e.code == 'KeyD') {
        bird.movingRight = true;
    } else if (e.code == 'KeyA') {
        bird.movingLeft = true;
    }

    if (e.code == 'Space' || e.code == 'ArrowUp') {
        if (velocityY >= -8) velocityY -= 6

        if (gameOver) {
            bird.y = birdY
            bird.x = birdX
            pipeArray = []
            score = 0
            gameOver = false
        }
    }
}

function cancelBirdHorizontal(e) {
    if (e.code == 'KeyD') {
        bird.movingRight = false;
    } else if (e.code == 'KeyA') {
        bird.movingLeft = false;
    }
}

function detectCollision(a, b) {
    return a.x < b.x + b.width &&
        a.x + a.width > b.x &&
        a.y < b.y + b.height &&
        a.y + a.height > b.y
}
<html>
<head>
    <title> Snake </title>
</head>
<body>

    <!-- Canvas to draw snake, food and score -->
    <canvas id="canvas" height="500px" width="500px" style="border-style:solid; margin:0 auto;"></canvas>

    <!-- JavaScript file -->
    <script>
    var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    length = 5, // length of the snake
    size = 5, // size of each circle
    snake = [], // array containing coordinate of each snake's circle
    direction = 'right', // direction of snake
    speed = size * 2, // speed with which snake moves
    startPos = {
        x: 100,
        y: 100
    }, // start position of snake
    timer, // timer which runs throughout the game
    food = {
        x: 12,
        y: 67,
        color: 'red'
    }, //position and color of food
    score = 0; // your game score
    function init() {
    for (var i = 0; i < length; i++) {
        snake.push({
            x: startPos.x - (size * 2) * i,
            y: startPos.y
        });
    }
    timer = setInterval(draw, 100);
    function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //draw snake
    for (var i = snake.length - 1; i >= 0; i--) {
        if (i != 0) {
            // if its not snake's head
            snake[i].x = snake[i - 1].x;
            snake[i].y = snake[i - 1].y;
        } else {
            // if its snake's head
            switch (direction) {
            case 'up':
                snake[0].y -= speed;
                break;
            case 'down':
                snake[0].y += speed;
                break;
            case 'right':
                snake[0].x += speed;
                break;
            case 'left':
                snake[0].x -= speed;
                break;
            default:
                break;
            }
        }

        ctx.beginPath();
        ctx.arc(snake[i].x, snake[i].y, size, 0, 2 * Math.PI);
        ctx.stroke();
    }

    //draw food
    ctx.fillStyle = food.color;
    ctx.beginPath();
    ctx.arc(food.x, food.y, size, 0, 2 * Math.PI);
    ctx.fill();

    // check collissin between food and snake
    if (checkCollission(snake[0], food)) {
        score++;
        food.x = random(0, canvas.width);
        food.y = random(0, canvas.height);
    }

    //draw score
    ctx.fillText('Score : ' + score, 10, 20);
}
ctx.beginPath();
ctx.arc(snake[i].x, snake[i].y, size, 0, 2 * Math.PI);
ctx.stroke();
function checkCollission(cir1, cir2) {
    var d = Math.sqrt(Math.pow(cir2.x - cir1.x, 2) + Math.pow(cir2.y - cir1.y, 2));
    var r = size * 2;
    return (d < r);
}
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
document.onkeydown = function (e) {
    switch (e.keyCode) {
    case 38:
        direction = 'up';
        break;
    case 40:
        direction = 'down';
        break;
    case 39:
        direction = 'right';
        break;
    case 37:
        direction = 'left';
        break;
    default:
        break;
    }
}
    </script>
</body>
</html>
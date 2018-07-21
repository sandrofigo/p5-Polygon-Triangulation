let points = [];
let scale = 100;

function setup() {
    points = [
        createVector(0, 1),
        createVector(1, 0),
        createVector(0, -1),
        createVector(-1, 0)
    ];

    createCanvas(window.innerWidth, window.innerHeight);
    background(41, 47, 54);
}



function draw() {
    background(41, 47, 54);

    drawPoints();
}

function drawPoints() {
    for (let index = 0; index < points.length; index++) {
        const point = points[index];

        noStroke();
        fill(255, 255, 255);
        ellipse(point.x * scale + window.innerWidth / 2, -point.y * scale + window.innerHeight / 2, 10, 10);
    }
}
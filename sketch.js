
let c;
let size = 25;
let circles = [];
let cols;
let rows;

function setup() {
    createCanvas(800, 800);
    cols = width / size;
    rows = height / size;
    for (let i = 0; i < cols; i++) {
        circles[i] = [];
        for (let j = 0; j < rows; j++) {
            circles[i][j] = new Circle(size / 2 + i * size, size / 2 + j * size, 0, 0);
        }
    }
}

function draw() {
    background('#1B3C73');
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let distance = dist(mouseX, mouseY, circles[i][j].x, circles[i][j].y);
            circles[i][j].dw = map(distance, 0, width, 0, size);
            circles[i][j].dh = map(distance, 0, height, 0, size);
            circles[i][j].display();
        }
    }

}
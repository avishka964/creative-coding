function setup() {
    createCanvas(400, 400, WEBGL);
    angleMode(DEGREES);
}

function draw() {
    background(30);

    rotateX(50);

    noFill();
    stroke(255);

    for (var i = 0; i < 20; i++) {

        var r = map(sin(frameCount / 2), -1, 1, 100, 200);
        var g = map(i, 0, 20, 100, 200);
        var b = map((frameCount), -1, 1, 200, 100);

        stroke(r, g, b);

        rotate(frameCount / 50);

        beginShape();
        for (var j = 0; j < 360; j += 10) {
            var red = i * 8;
            var x = red * cos(j);
            var y = red * sin(j);
            var z = sin(frameCount * 2 + i * 10) * 50;

            vertex(x, y, z);
        }
        endShape(CLOSE);
    }
}
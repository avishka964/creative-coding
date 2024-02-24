class Circle {
    constructor(x, y, dw, dh) {
        this.x = x;
        this.y = y;
        this.dw = dw;
        this.dh = dh;
    }


    display() {
        let distance = dist(mouseX, mouseY, this.x, this.y);
        noStroke();
        fill('#FFCAD4');
        ellipse(this.x, this.y, size, size);
        fill('#1B3C73');
        ellipse(this.x, this.y, this.dw, this.dh);
    }
}
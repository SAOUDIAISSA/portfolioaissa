const canvas = document.getElementById("background-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let circles = [];

class Circle {
    constructor(x, y, radius, dx, dy, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx * 0.5;
        this.y += this.dy * 0.5;

        this.draw();
    }
}

function init() {
    circles = [];
    for (let i = 0; i < 40; i++) {
        const radius = Math.random() * 10 + 5;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const dx = Math.random() * 2 - 1;
        const dy = Math.random() * 2 - 1;
        const color = "rgba(0, 123, 255, 0.15)"; // Bleu doux transparent
        circles.push(new Circle(x, y, radius, dx, dy, color));
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    circles.forEach((circle) => circle.update());
    requestAnimationFrame(animate);
}

init();
animate();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

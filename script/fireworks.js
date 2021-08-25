// fireworks annimation after complete sudoku
const fireworks = [];
const particles = [];
class Firework {
    constructor() {
        const colours = [
            'rgba(255,0,0,1)',
            'rgba(255,92,0,1)',
            'rgba(255, 226, 112,1)',
            'rgba(164, 255, 112,1)',
            'rgba(112, 255, 206,1)',
            'rgba(0, 232, 255,1)',
            'rgba(0, 67, 255,1)',
            'rgba(108, 0, 255,1)',
            'rgba(209, 0, 255,1)',
            'rgba(255, 0, 157,1)'
        ]
        this.x = window.innerWidth / Math.floor(Math.random()*9);
        this.y = window.innerHeight -10;

        this.snelheid = 15;
        this.angle = (Math.random() * Math.PI /2)+Math.PI /4;
        this.veloX = Math.cos(this.angle)* this.snelheid;
        this.veloY = -Math.sin(this.angle)* this.snelheid;

        this.elem = document.createElement('div');
        this.elem.className = 'firework';
        this.elem.style.top = this.y +'px';
        this.elem.style.left = this.x + 'px';
        this.elem.style.backgroundColor = colours[parseInt(Math.random()*colours.length)];
        document.body.appendChild(this.elem);

        setTimeout(() => {
            this.bang(this.elem.style.backgroundColor);
            this.elem.remove();
            fireworks.splice(fireworks.indexOf(this),1);
        }, 400);
    }

    bang(col) {
        for (let i = 0; i<100; i++){
        const particle = new Particle(col);
        particle.setPosition(this.x, this.y);
        particles.push(particle);
        };
    }

    update() {
        this.x += this.veloX;
        this.y += this.veloY;
        this.elem.style.top = this.y +'px';
        this.elem.style.left = this.x + 'px';
        this.veloY += 0.2;
    }
}

    setInterval(() => {
        fireworks.forEach((firework)=> firework.update());
        particles.forEach((particle)=> particle.update())
    }, 10);

class Particle {
    constructor(col) {
        this.x = 0;
        this.y = 0;

        this.snelheid = Math.random() * 10 +3;
        this.angle = Math.random() * Math.PI *1.5;
        this.veloX = Math.cos(this.angle)* this.snelheid;
        this.veloY = -Math.sin(this.angle)* this.snelheid;

        this.elem = document.createElement('div');
        this.elem.className = 'particle';
        this.elem.style.top = this.y +'px';
        this.elem.style.left = this.x + 'px';
        this.elem.style.backgroundColor = col;
        document.body.appendChild(this.elem);

        setTimeout(() => {
            this.elem.remove();
            particles.splice(particles.indexOf(this),1);
        }, 800);
    }
        setPosition(x,y) {
            this.x = x;
            this.y = y;
            this.elem.style.top = this.y +'px';
            this.elem.style.left = this.x + 'px';
        }
        update() {
            this.x += this.veloX;
            this.y += this.veloY;
            this.elem.style.top = this.y +'px';
            this.elem.style.left = this.x + 'px';
            this.veloY += 0.5;
        }
    }
export default class Timer {

    constructor(el, time) {
        this.el = el;
        this.time = time;
        this.interval;

        this.render();

        this.start();

        console.log(123);
    }

    tick = () => {
        this.time--;
        this.render();

        if(this.time <= 0) {
            this.stop();
        }
    }

    start() {
        this.interval = setInterval(this.tick, 1000);
    }

    stop() {
        clearInterval(this.interval);
    }

    render() {
        this.el.innerHTML = this.time;
    }
}
class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }

    emit(event, ...args) {
        if (this.events[event]) {
            this.events[event].forEach(listener => listener(...args));
        }
    }
}

const emitter = new EventEmitter();

// Listen for the 'aria-hidden' event
emitter.on('aria-hidden', (isHidden) => {
    console.log(`aria-hidden set to ${isHidden}`);
});

// Emit the 'aria-hidden' event with the value true
emitter.emit('aria-hidden', true);

import EventEmitter from "event";

export class Tiker extends EventEmitter {
    constructor() {
        super();

        setTimeout(() => { this.week(); }, 5000);
        setTimeout(() => { this.month(); }, 10000);
        setTimeout(() => { this.year(); }, 15000);
    }

    week() {
        this.emit("week");
    }
    month() {
        this.emit("month");
    }
    year() {
        this.emit("year");
    }
}
import EventEmitter from "events";

class Member extends EventEmitter {
    constructor() {
        super();
        global.TikerObj.on("month", this.onMonth)
    }

    onMonth() {
        this.emit("post", new Post());
    }
}
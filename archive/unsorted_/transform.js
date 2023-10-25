import {once} from "events";
import {Transform, Duplex, Readable, Writable} from "stream";
import { unlinkSync } from "fs";

class tr extends Transform {
    constructor(callback) {
        super();
        this.callback = callback;
    }

    _transform(chunk, encoding, callback) {
        let length = chunk.length;
        chunk = callback(chunk);
        if(chunk.length > length) {
            let lost = chunk.slice(length);
            chunk = chunk.slice(0, length);
            console.log("data lost", lost);
        }
        callback(null, chunk)
    }
}
import {once} from "events";
import {Transform, Duplex, Readable, Writable} from "stream";
import { unlinkSync } from "fs";

class wr extends Writable {
    constructor(fileName, maxSize) {
        super();
        this.fileName = fileName;
        this.maxSize = maxSize;
    }
    writtenSize = 0;
    _write(chunk, encoding, callback) {
        if(this.writtenSize + chunk.length > this.maxSize * 8) {
            unlinkSync(this.fileName);
            this._destroy();
        }
        console.log(String(chunk));
        callback();
    }
}
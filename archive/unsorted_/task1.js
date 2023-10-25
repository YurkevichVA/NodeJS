import {createReadStream, createWriteStream, stat, statSync} from "fs";

const stats = statSync(process.argv[2]);

let fullLength = stats.size;

const readStream = createReadStream(process.argv[2], {highWaterMark: 16});
const writeStream = createWriteStream(process.argv[3], {highWaterMark: 16});

let onData = (chunk) => {
    readStream.pause();
    setTimeout(() => {
        let moved = Math.floor(readStream.bytesRead * 100 / fullLength);
        console.clear();
        console.log(moved, "%");
        writeStream.write(chunk, (error) => { if(error) console.log(error) }); 
        readStream.resume(); 
    }, 100);
}

readStream.on("data", onData);
// // Readable
// // Readable -> createReadStream fs

// import {once} from "events";
// import {Transform, Duplex, Readable, Writable} from "stream";

// const mostPopularPosts = [
//     "Hoder ate and apple",
//     "Boris ate an apple",
//     "Oleg ate an apple"
// ];

// const r = Readable.from(". .. .. . .. . .. . ");

// // r.on("data", ...);

// let str = "adsfa;ldfnkjsvkaflkjflknsdkocjakfnewiojfoihwiorj309r0nwe0cnwjejwojr03jfoisdfpowejfowepsfoaf";

// class R extends Readable {
//     _read() {
//         this.push(mostPopularPosts.shift());

//         if(!mostPopularPosts.length) {
//             this.push(null);
//         }
//     }
// }

// new R().on("data", console.log);

// class W extends Writable {
// _write(chunk, encoding, callback) {
//     console.log(String(chunk));
//     callback();
// }
// }

// const w = new W({highWaterMark: 3});

// (async () => {
//     for(let i =0; i<5;i++){
//         const canWrite = w.write(`${i}${i}`);
//         console.log("canWrite", canWrite);

//         if(!canWrite) {
//             await once(w, "drain");
//             console.log("drain");
//         }
//     }
// })();

// class D extends Duplex {
//     _read() {
//         this.push(mostPopularPosts.shift());

//         if(!mostPopularPosts.length) {
//             this.push(null);
//         }
//     }
//     _write(chunk, encoding, callback) {
//         console.log(String(chunk));
//         callback();
//     }
// }

// const d = new D();

// d.on("data", async (chunk) => {
//     const canWrite = d.write(chunk);
//     if(!canWrite) {
//         d.pause();
//         await once(d, "drain");
//         d.resume();
//     }
// })

// class T extends Transform {
//     _transform(chunk, encoding, callback) {
//         // err, chunk
//         callback(null, `*${chunk}*`)
//     }
// }

// const t = new T();

// r.pipe(t).pipe(w);


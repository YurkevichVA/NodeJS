// nodemon

// nodemon - модуль, що дозволяє автоматично перезавантажувати процес при зміні в проєкті
// (ctrl + c) * 2 - припинення процесу

console.log("!");
console.log("11");

// npx

// npx - команда яка завантажує пакет, виконує та видалаяє
// npx yodasay coco

// Buffer

import {readFile} from 'fs/promises';

// readFile("index.js")
//     .then(console.log);

const buf1 = Buffer.alloc(5);           // виділяє пам'ять на вказану кількість байт
const buf2 = Buffer.from("hi folks");   // віділяє пам'ять необхідну для збереження даних і зберігає ці дані в пам'яті

console.log(buf1.toJSON());             // вивод буферу в форматі JSON
console.log(buf2.toJSON());             // { type: 'Buffer', data: [] }

buf1.write("hello i hate js");          // записує дані в буфер, якщо дані більші за виділений буфер - зберігається тілька та частина даних що вміщається в буфер

console.log(buf1.toJSON());             // { type: 'Buffer', data: [ 104, 101, 108, 108, 111 ] }

const buf3 = Buffer.alloc(5, "r");      // можна записати дані одразу, заповнює всі байти символом r

buf3[2] = 32;                           // можна перезаписувати дані за допомогою індексів

console.log(buf3.toJSON());             // { type: 'Buffer', data: [ 114, 114, 32, 114, 114 ] }

buf2.copy(buf3);                        // копіює buf2 у buf3

// buf2.copy(buf3, targetStart, sourceStart, sourceEnd);  // можна вказати індекси

console.log(buf3.toJSON());             // { type: 'Buffer', data: [ 104, 105, 32, 102, 111 ] }

let buf4 = Buffer.alloc(5);
buf4 = null;                            // звільнення пам'яті

// компресія даних

// deflate
// gzip
// brodlie

import zlib from "zlib";
import fs from "fs";

/*
const gzip = zlib.createGzip(); // трансформ потік

const r = fs.createReadStream("./1.txt");
const w = fs.createWriteStream("./1.txt.gz");

r.pipe(gzip).pipe(w);

const ungzip = zlib.createUnzip(); // трансформ потік

const unr = fs.createReadStream("./1.txt.gz");
const unw = fs.createWriteStream("./1unzip.txt");

r.pipe(ungzip).pipe(unw);
*/

// std-in | std-out

/*
process.stdin.on("data", (data) => { // Тип data - Buffer
    process.stdout.write(String(data).toUpperCase());
});
*/

import readline from "readline";

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

//rl.write("123");

// rl.question("your age? ", (answer) => {
//     if(answer === "18") {
//         rl.write("!");
//     } else {
//         rl.write("?");
//     }
// })

// rl.setPrompt("!!!!!!!!!");
// rl.prompt();
// rl.write("123123");
// rl.prompt();

// rl.on("line", (l) => {
//     // ...
// })

process.exit(0); // 0 - ok, 1 - err
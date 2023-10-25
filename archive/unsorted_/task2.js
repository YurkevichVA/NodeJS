import { readFileSync, createReadStream, createWriteStream, statSync, write, writeFile } from "fs";

// читаємо словник кодування
let buf = readFileSync(process.argv[3]);
let pairs = [];
console.log(String(buf).split('\r\n').forEach(pair => {
    pairs.push(pair.split(':'));
}));

// читаємо загальний розмір кодуємого файлу
const stats = statSync(process.argv[2]);
let fullLength = stats.size;

// створюємо потоки для читання кодуємого файла та записи в тимчасовий файл
const readStream = createReadStream(process.argv[2], {highWaterMark: 16});
//const writeStream = createWriteStream("./temp.txt", {highWaterMark: 16});

// закодований рядок
let coded = "";

let onData = (chunk) => {
    readStream.pause();
    setTimeout(() => {
        // розрахунок відсотків
        let moved = Math.floor(readStream.bytesRead * 100 / fullLength);
        console.clear();
        console.log(moved, "%");

        // формування закодованого рядка
        let chunk_str = String(chunk);
        pairs.forEach(pair => {
            chunk_str = chunk_str.replaceAll(pair[0], pair[1]);
        }); 
        coded += chunk_str;

        // запис в тимчасовий файл
        //writeStream.write(chunk_str, (error) => { if(error) console.log(error) }); 

        readStream.resume(); 
    }, 100);
}

readStream.on("end", () => {
    console.log("end coded", coded);
    writeFile(process.argv[2], coded, (err) => { if(err) console.log(err); });
});

readStream.on("data", onData);


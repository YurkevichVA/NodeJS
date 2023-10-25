import fs from "fs";

const poem = String(fs.readFileSync("./poem.txt")).split(' ');

for(let i = 0; i < 50; i++)
{
    fs.writeFileSync("./fs_test_directory/" + String(i + 1) + ".txt", poem[i]);
}
console.log("files created")
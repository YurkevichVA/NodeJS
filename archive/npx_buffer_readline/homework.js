import readline from "readline";
import zlib from "zlib";
import fs, { access } from "fs";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let currentState = "start";
//flet ignoreLine = false;

const STEP_1_MSG = "Choose action:\n-compress\n-uncompress\n-help\n-end\n";
const HELP_MSG   = "Compress - compresses the file.\nUncompress - uncompresses the file.\nHelp - description of all comands.\nEnd - exit the process\n";

//rl.write(STEP_1_MSG);

main();

function main() {
    rl.question(STEP_1_MSG, (answer) => {
        switch(String(answer)) {
            default: 
                rl.write("Wrong input!");
                main();
                break;
            case "compress": 
                compress();
                break;
            case "uncompress":
                uncompress();
                break;
            case "help": 
                rl.write(HELP_MSG);
                rl.question('', main);
                break;
            case "end": 
                rl.write("bye!\n");
                process.exit(0);
        }
    });
}

function compress() {
    let target;
    let archive;
    rl.question("Enter target file: ", (answer) => {
        target = String(answer); 
        console.log(target);
        rl.question("Enter archive file: ", (answer) => {
            archive = String(answer);
            console.log(archive);
            const gzip = zlib.createGzip();
            const r = fs.createReadStream(target);
            const w = fs.createWriteStream(archive);

            r.pipe(gzip).pipe(w);
            main();
        });
    });  
}

function uncompress() {
    rl.question("Enter your archive to unzip\n", (answer => {
        if(answer.includes(".gz"))
        {
            const unzip = zlib.createUnzip();
            const readFile = fs.createReadStream(answer);
            answer = answer.replace(".gz", "");
            const writeFile = fs.createWriteStream(answer);
            readFile.pipe(unzip).pipe(writeFile);
            main();
        }
        else
        {
            uncompress();
        }
    }));
}
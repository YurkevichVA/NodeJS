import fs from "fs";

if(!process.argv[2]) { console.log("path is required") }
else { 
    console.log(process.argv[2]);
    fs.readdir(process.argv[2], (err, data) => {
        if(err) {console.log(err); return; }
        console.log(data);
}); }
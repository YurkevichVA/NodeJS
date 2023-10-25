import fs from "fs";

fs.readdir("./fs_test_directory", (err, list) => {
    if(err) {console.log(err); return; }
    let isFull = false;
    list.forEach(file => {
        if(file.slice(-5) != ".html")
        {
            isFull = true;
            fs.rm("./fs_test_directory/" + file, (err) => { });
        }
    });
    if(!isFull) console.log("directory already clear");
    else console.log("remove done");
})
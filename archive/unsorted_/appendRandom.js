import {readdir, appendFile} from 'fs/promises';

readdir("./fs_test_directory")
    .then((value) => {
        value.forEach(file => {
            if(file.slice(-4) === ".txt")
            {
                appendFile("./fs_test_directory/" + file, String(Math.random()));
            }
        })
    })
    .then(console.log("append done"));
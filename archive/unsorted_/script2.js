const cowsay = require("cowsay");

console.log(cowsay.say({
    text: process.argv[2]
}))
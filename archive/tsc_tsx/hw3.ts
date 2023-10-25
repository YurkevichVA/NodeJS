function stringToNumber(strings: Array<string>): Array<number> {
    let numbers: Array<number> = [];

    strings.forEach(str => {
        numbers.push(Number(str));
    });

    return numbers;
}

console.log(stringToNumber(["asdf", "asdf", "sdg"]));
import { readFile, appendFile, writeFile } from "fs/promises";
import { createWriteStream } from "fs";

export const isEven = (num: number): boolean => {
    return num % 2 === 0;
} 

export const revGen = (count: number): string[] => {
    let reviews: string[] = [];
    readFile("./reviews.txt")
        .then((value: Buffer) => {
            reviews = (String(value)).split("/\r?\n/");
            reviews.push("lorem ipsum ipsum lorem lorem");

            let file = createWriteStream('./reviews.txt');
            reviews.forEach((v: string) => { file.write(v + '\n'); });
            file.end();
        });
    return reviews;
}

export const getTen = (): string => {
    let reviewsArr: string[] = [];
    readFile("./reviews.txt")
        .then((value: Buffer) => {
            reviewsArr = (String(value)).split("/\r?\n/");
        });
    
    if(reviewsArr.length >= 10) {
        return reviewsArr[10];
    } else {
        return "not enough reviews";
    }
}
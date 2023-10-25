
function sum2(left?: number, right?: number): number {
    if(left === undefined && right === undefined) {
        throw new Error('Parameter is not a number!')
    } else if(left === undefined) {
        return right! * right!;
    } else if(right === undefined) {
        return left! * left!;
    } else {
        return left! + right!;
    }
}

console.log(sum2(1,2));
console.log(sum2(2));
console.log(sum2());
function arrayToSet<T>(arr: Array<T>): Set<T> {
    let set: Set<T> = new Set<T>(arr);
    return set;
}

console.log(typeof arrayToSet(["asd","ssdfsd","asdfsf"]));
function showFields(obj: {name: string, age: number, pet: string}): void {
    console.log(obj.name);
    console.log(obj.age);
    console.log(obj.pet);
}

showFields({name: "Vova", age: 20, pet: "cat"});
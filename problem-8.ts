
function validateKeys<T extends object>(obj: T, keys: string[]): boolean {
    return keys.every(key => key in obj);
}


const person = { name: "Jhankar Bhai", age: 36, email: "jhankarbhai@example.com" };


// console.log(validateKeys(person, ["name", "age"]));  
// console.log(validateKeys(person, ["name", "address"])); 
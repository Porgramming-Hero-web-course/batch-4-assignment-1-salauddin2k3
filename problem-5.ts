
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}


const person = { name: "Jhankar Bhai", age: 36 };

// console.log(getProperty(person, "name"));
// console.log(getProperty(person, "age"));

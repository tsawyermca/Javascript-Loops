//Problem 1
console.log("Problem 1, a loop going up to 10");
for(let numbers = 0; numbers <= 10; numbers++){
    console.log(`${numbers}`)
}

//Problem 2
console.log("Problem 2, an array of names and greet each person")

const names = ["Tyler", "Noelle", "Sophie", "Michael", "Jack"]

for(let i = 0; i < names.length; i++){
    console.log(`Hello, ${names[i]}`)
}

//Problem 3
console.log("Problem 3, Using a loop to find the first number divisible by 7 in a range(1-50)")

for(let p3 = 1; p3 <= 50; p3++){
    if(p3 % 7 === 0){
        console.log(`The first number divisible by 7 is ${p3}`);
        break;
    }
} 
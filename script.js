//Loops

//for loop

for(let i = 0; i < 5; i++){
    console.log(`(for) i = ${i}`)
}

//3 main parts to a loop
//Initialization, the (let i = 0)
//Condition/Expression, a true/false, in this example its i < 5
//Step, Usually increment/decrement, in this example its i++

//outer loop
for(let month = 1; month <= 12; month++){
    console.log(`month: ${month}`)
    for(let day = 1; day <= 30; day++){
        console.log(`day: ${day}`)
    }
}

//while loop

//while loops utilize variables that are already established and are not self contained. Be careful of loop going infinite

let ii = 0;
while(ii < 5){
    console.log(`${ii}`)
    ii++
}

//do while loop
//do while loops are good for user inputs

let pass;
do {
    input = prompt("Password: ")
} while (input != "123")
    console.log("I'm in")

//Array
const numbers = [1,2,3,4,5]

//forEach loops
//utilizes arrays
numbers.forEach((element)=>{
    console.log(element)
})
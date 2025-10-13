//Task1.
// let name = prompt("What is your name? ");
// let number = prompt("What is your favourite number? ");
// console.log(`hello ${name},are you ${number} years old?`);

//Task2.
// let number1 = Number(prompt("Enter the number: "));
// let operator = prompt("Enter the operator(+ - * /): ");
// let number2 = Number(prompt("Enter the another number: "));
// let result = 0;

// // switch(operator){
// //     case "+": result = number1+number2;
// //     break;
// //     case "-": result = number1-number2;
// //     break;
// //     case "*": result = number1 * number2;
// //     break;
// //     case "/": result = number1 / number2;
// //     break;
// //     default: result ="invalid opeartor";
// // }

// // if(operator === "+"){result = number1 + number2};
// // if(operator === "-"){result = number1 - number2};
// // if(operator === "*"){result = number1 * number2};
// // if(operator === "/"){result = number1 / number2};

// if(result % 2 !== 0){console.log("We don't give odd number in our result!");}
// else{console.log(`Result: ${result}`);}

//Task3.
// let array =[1,2,3,4,5,6];
// let i = Math.floor(Math.random()*array.length);// random function only take value between 0 and 1
// let j = Math.floor(Math.random()*array.length);
// if( i !== j){
//     [array[i],array[j]]=[array[j],array[i]];
//     console.log(array);
// }else{console.log(`OOPS! it Seem's i is equal to j`);}

//Task4.PENDING

//task5. doing callback on higherorder function(a function which return another function or get another function as it's argument)
// case1.another function thusse ga value in this function
//      Ex.1
// function SayHi (name,greetings){
//     console.log(`${greetings} Mr. ${name}`);
// }
// function greetings(){
//     let greet = ["vannakkam", "Hello", "How are you?","Namaste","keem chhoo"];
//     return greet ;
// }

// SayHi("Ram",greetings()[2]);
//     Ex.2
// function showwheather(wheather){
//     console.log(`Today is a ${wheather} day`);
// }
// function wheather(){
//     let wh = ["cold","sunny","rainy","cloudy"];
//     return wh;
// }
// showwheather(wheather()[1]);
//    Ex.3
// function introducePerson(adject){
//     console.log(`This person is really ${adject}`);
// }
// function adject(){
//     let adject_arr = ["Liakeable","Strong","Brave","Honest","Humble","Confident","Mature","Funny","Smart"];
//     let random_section = Math.floor(Math.random()*adject_arr.length);
//     let return_karne_keliye = adject_arr[random_section];
//     return return_karne_keliye;
// }
// introducePerson(adject());
//   Ex.4
// function Bill(amount,discount_rate,Net_amount){
//     console.log(`Amount:${amount}`);
//     console.log(`Discount:${discount_rate} %`);
//     console.log(`Net Payable:${Net_amount}`);
// }

// function calculation(){
//     let rate =[10,5,90,30,50,60,95,20,80,75,70,85];//for internal use only

//     let amount = Number((prompt(`Enter the Price: `)).trim()); 
//     let discount_rate =rate[Math.floor(Math.random()*rate.length)];
//     let Net_amount = discount_rate>85?((amount*(discount_rate))/100):((amount*(100-discount_rate))/100);


//     return {amount, discount_rate ,Net_amount};
// }
// let result = calculation();

// Bill(result.amount,result.discount_rate,result.Net_amount);
//   Ex.5

//Task6.  Dom manupulation
// let color_options = ["brown","red","pink","green","blue","yellow","orange","violet"] 
// let button = document.querySelector("button");

// button.addEventListener("click",function(){
//     button.style.backgroundColor = color_options[Math.floor(Math.random()*color_options.length)]; 
// })

//Task7.(You do not need "" around keys of an object and seperate each object by comma)
let people = [
    { name: "Ramesh", age: 25, language_speaks: "hindi/urdu", city: "delhi", email: "ramesh@gmail.com" },
    { name: "Suresh", age: 37, language_speaks: "hindi/english", city: "mumbai", email: "suresh@gmail.com" },
    { name: "Ram", age: 28, language_speaks: "punjabi/tamil", city: "chennai", email: "ram@gmail.com" },
    { name: "Rashmi", age: 19, language_speaks: "english/kannad", city: "banglore", email: "rashmi@gmail.com" }
];

let moreThan25 = 0;
let lessThan25 = 0;
let equal25 = 0;

for (let i = 0; i <= people.length - 1; i++) {
    // if (people[i].age > people[i + 1].age) {
    //     console.log(`the oldest in the group is ${people[i].age} years old`)
    //     break;
    // }
    let condition =people[i].age ;
    if(condition > 25){
        moreThan25 ++;
    }
    else if(condition < 25){
        lessThan25 ++;
    }
    else if(condition === 25){
        equal25 ++;}
}
console.log(`there are ${moreThan25} people having age more than 25`);
console.log(`there are ${lessThan25} having age less than 25`);
console.log(`there are ${equal25} people of 25 years of age`);

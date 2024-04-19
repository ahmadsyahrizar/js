// function.
// js standard
// => ECSMASCRIPT -> ES5, ES6, ES7, ES8, dst. 


// without function.

const x = 1;
const y = 2;
const z = 3;
const a = 4;
const b = 5;
const c = 6;

// WITH FUNCTION KEYWORD
function isOdd(param){
 return param % 2 !== 0;
}; 

// Anonymous Function;
const isEven = function(param){
 return param % 2 === 0;
};

// >= ES 2015, arrow function.

const toCelcius = (fahrenheit) => {
 return (5/9) * (fahrenheit-32);
}

const divide = (paramA, paramB) =>  paramB / paramA;

// nested scope; 
const hummus = (factor) => {
  const ingredients = (amount, unit, name) => {
   let ingredientAmount = amount * factor;

   if(ingredientAmount > 1){
    unit += "s"; // => unit = unit + "s"
   }

   console.log(`${ingredientAmount} ${unit} ${name}`);
  }

  //call function ingredients inside hummus function;
  ingredients(1, "can", "chickpeas");
  ingredients(0.25, "cup", "tahini");
}

hummus(100);


const carList = [{name: "TOYOTA", availability: true}, {name:"HONDA", availability: false}, {name: 'HYUNDAi', availability: true}];


const customFilter = (arrList,callbackFunction) => {
  let passed = [];

 for(let element of arrList){
   if(callbackFunction(element)){
     passed.push(element)
   }
 }

 return passed;
}

const testFilter = customFilter(carList, (val) => {
// any logic here.
 return val.availability
});

console.log({testFilter})


// closure; 
const multiplier = (paramA) => {
 const innerFunction = (number) => number * paramA;

 return innerFunction;
}

const twice = multiplier(2)
const callInnerFunction = twice(5)

console.log({callInnerFunction})

let money = 271_000_000_000_000

console.log({money: Number(money)})
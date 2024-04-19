const cars = ["BMW", "Volvo", "Subaru", "Ford"];
// output
// bmw
// volvo
// subaru
// ford


// LOOPING

// for loop 
for(let i=0; i < cars.length; i++){
   console.log(cars[i])
}

// for in 
const person = {firstName: "rija", lastName: "rmdh", age: 18}

let txt = "";
for(const x in person){
 txt += person[x] + " ";
}

// console.log({txt})

// forEach
// cars.forEach((val)=> {
//   console.log(val)
// });

// map 
const dataObj = [
 {
  carName: "volvo", 
  type: "sedan", 
  availability: true, 
  isNew: true
 },
 {
  carName: "HONDA", 
  type: "hatchback", 
  availability: false, 
  isNew: false
 }, 
 {
  carName: "TOYOTA", 
  type: "MVP", 
  availability: true, 
  isNew: true
 }
]

const newCarData =  dataObj.map((data)=> {
   return  `${data.carName} with type ${data.type} and ${data.availability ? 'available' : 'not available'} `;
});

console.log({newCarData})

// filter
// mutable
// immutability
// function => arrow function, anonymous function, dll , by reference.
// cars.filter();
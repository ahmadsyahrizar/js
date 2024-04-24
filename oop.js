// function  
function diskon(x = 50){
 return (x*30)/100;
}

diskon()
// object
 const objExample = {
  name: "rija rmdh", 
  username: "rija", 
  age: 21,
 }
// class
class Human {
  constructor(name, address){
   this.name = name;
   this.address = address;
  }

  introduce(){
   return `Hi, my name is ${this.name}`
  }
}

const roni = new Human("roni", "Jakarta Barat");
const coleman = new Human("Coleman", "USA");
const sutardi = new Human("Sutardi", "USA");
console.log({roni: roni.introduce()
})
Roni.introduce()


// inheritance.
// encapsulation.
// polymorphism.

// interface
// explicit data-type.
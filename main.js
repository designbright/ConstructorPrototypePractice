//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/



// Dog Constructor & Prototype
function Dog (color, status, hungry, owner) {
  this.color = color;
  this.status = status;
  this.hungry = hungry;
  this.owner = owner;
};

let sadie = new Dog("black", "normal", false, "Mason");
let moonshine = new Dog("black", "normal", true);
let atticus = new Dog("Atticus")
// Instances of Dog
// Needed: sadie, moonshine, atticus

// function Sadie (){
//   "black",
//   "normal",
//   false,
//   "mason"
// };

function Moonshine(){
  this.hungry = true;
}

// let sadie = new Sadie();
// let moonshine = new Moonshine();
// let atticus = new Dog ("Atticus");


//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype

function Human(name, cool){
  this.name = name;
  this.pet = function(dog) {
    dog.status = 'happy'
  }

  this.feed = function(dog) {
    dog.hungry = false;
  }
  this.cool = cool;
}

let mason = new Human('Mason', false);
let julia = new Human('Julia', true);

// function Human (name, pet, cool) {
//   this.name = name;
//   this.pet = pet;
//   this.cool = cool;
// };
//
// let Mason = new Human (
//   "Mason",
//   "Sadie",
//   false
// );
//
// console.log(Mason.pet);
// Instances of Human
// Needed: mason, julia

// let Julia = new Human(
//   "Julia",
//   "Moonshine",
//   true
// );
//
// console.log(Julia.cool)

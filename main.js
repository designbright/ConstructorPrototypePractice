//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (name, color, status, hungry, owner) {
  this.name = name;
  this.color = color;
  this.status = status;
  this.hungry = hungry;
  this.owner = owner;
};
  // console.log(this);

// Instances of Dog
// Needed: sadie, moonshine, atticus

let sadie = new Dog (
  "Sadie",
  "black",
  "normal",
  false,
  "mason",
);

console.log(sadie.status);
console.log(sadie.color);

let moonshine = new Dog (
  "Moonshine",
  "black",
  "normal",
  true,
  "Julia"
);

console.log(moonshine.hungry);

let atticus = new Dog (
  "Atticus"
);

console.log(atticus.name)

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (name, pet, cool) {
  this.name = name;
  this.pet = pet;
  this.cool = cool;
};

let Mason = new Human (
  "Mason",
  "Sadie",
  false
);

console.log(Mason.pet);
// Instances of Human
// Needed: mason, julia

let Julia = new Human(
  "Julia",
  "Moonshine",
  true
);

console.log(Julia.cool)

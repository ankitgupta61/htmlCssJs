// var, let, const

// Scope
// var ----> function scope
// let & const ----> block scope

// example :

function scopeFunc() {
  if (true) {
    var x = 4;
    let y = 5;
  }
  console.log(x);
  console.log(y); // error as y is not defined
}

// scopeFunc();

// const stores a constant value for that scope, It has to be initialised, You can just declare it.

function constFunc() {
  if (true) {
    const x = 4;
    console.log(x);
    x = 5; //error as Assignment to a const variable
  }
}

constFunc();

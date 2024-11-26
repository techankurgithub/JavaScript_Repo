"use strict";
// let firstName = "Max";
// let firstName = "Max"; // it will throw error

var firstName = "Max";
var firstName = "Max"; // it will not throw error, which is wrong but that's the way var works !!

if (firstName === "Max") {
  var hobbies = ["swimming", "reading"];
  console.log(hobbies); // works if its var // works if its let
}

function greet() {
  let age = 40;
  let firstName = "Jose";
  console.log(firstName, age);
  console.log(hobbies); // works if its var // fails if its let
}

//console.log(firstName, age); // error
console.log(hobbies); // works if its var // fails if its let
console.log(firstName);

greet();

console.log(userName); // works if its var // fails if it let

let userName = "Noel";

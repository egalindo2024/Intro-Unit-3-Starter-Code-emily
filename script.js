/* Declare variables below to save the different sections (divs) of your story*/
let partner = document.querySelector (".option-one");
let leave = document.querySelector (".option-two");
let optionOne = document.querySelector (".option-one-screen");
let optionTwo = document.querySelector(".option-two-screen");
let nextOne = document.querySelector(".next-one")
let nextTwo = document.querySelector(".next-two")
let oneEnd = document.querySelector(".option-one-end");
let twoEnd = document.querySelector(".option-two-end");



partner.onclick=function(){
  optionOne.style.display="block"
};

leave.onclick=function(){
  optionTwo.style.display="block"
};

nextOne.onclick=function(){
  oneEnd.style.display="block"
};

nextTwo.onclick=function(){
  twoEnd.style.display="block"
};

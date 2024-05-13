const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

//capture DOM for password generation button, password fields, password length input & copy to clipboard buttons
const pswGen1 = document.getElementById("pswGen1");
const pswGen2 = document.getElementById("pswGen2");
const pswBtn = document.getElementById("pswBtn");
const pswLengthInput = document.getElementById("pswLength");
const copyPsw1 = document.getElementById("copyPsw1");
const copyPsw2 = document.getElementById("copyPsw2");

//Initialize variables
let password1 = [];
let password2 = [];
let charactersIndex1 = 0;
let passwordDigit1 = 0;
let charactersIndex2 = 0;
let passwordDigit2 = 0;
let isPswBtnClicked = 0;

//Add Event Listener on button "generate passwords"
pswBtn.addEventListener("click", generatePsw);

//Add Event Listener for buttons "copy password"

copyPsw1.addEventListener("click", copyPassword1);
copyPsw2.addEventListener("click", copyPassword2);

//function invoked when button "generate passwords" is clicked
function generatePsw() {
  //create a for loop to generate 2 passwords
  if (isPswBtnClicked === 0) {
    generatePswd2();
    isPswBtnClicked = 1;
  } else {
    password1 = [];
    password2 = [];
    pswGen1.textContent = "";
    pswGen2.textContent = "";
    generatePswd2();
    isPswBtnClicked = 1;
  }
}

function generatePswd2() {
  for (let i = 0; i < pswLengthInput.value; i++) {
    charactersIndex1 = Math.floor(Math.random() * characters.length);
    charactersIndex2 = Math.floor(Math.random() * characters.length);
    passwordDigit1 = characters[charactersIndex1];
    passwordDigit2 = characters[charactersIndex2];
    password1.push(passwordDigit1);
    password2.push(passwordDigit2);
    pswGen1.textContent += password1[i];
    pswGen2.textContent += password2[i];
  }
}

function copyPassword1() {
  if (pswGen2.textContent === "") {
    alert("password field empty");
  } else {
    navigator.clipboard.writeText(pswGen1.textContent);
    alert("Copied the password: " + pswGen1.textContent);
  }
}

function copyPassword2() {
  if (pswGen2.textContent === "") {
    alert("password field empty");
  } else {
    navigator.clipboard.writeText(pswGen2.textContent);
    alert("Copied the password: " + pswGen2.textContent);
  }
}

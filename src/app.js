/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let who = [
  "El compilador",
  "El servidor",
  "Mi computadora",
  "El IDE",
  "El repositorio de GitHub"
];
let action = [
  "falló",
  "se colgó",
  "no respondió",
  "arroja errores",
  "no se sincroniza"
];
let what = ["mi código", "el proyecto", "la aplicación", "el script"];
let when = [
  "antes de la reunión",
  "mientras compilaba",
  "durante el deploy",
  "cuando hacía pruebas",
  "al actualizar el sistema"
];

function generateExcuse() {
  let whoPart = who[Math.floor(Math.random() * who.length)];
  let actionPart = action[Math.floor(Math.random() * action.length)];
  let whatPart = what[Math.floor(Math.random() * what.length)];
  let whenPart = when[Math.floor(Math.random() * when.length)];

  return `${whoPart} ${actionPart} ${whatPart} ${whenPart}`;
}

function generateNewExcuse() {
  document.getElementById("excuse").innerHTML = generateExcuse();
}

document.getElementById("generateButton").onclick = generateNewExcuse;

generateNewExcuse();

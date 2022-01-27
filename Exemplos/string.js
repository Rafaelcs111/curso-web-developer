// Métodos de string

// slice

const str = "maçã, banana, laranja"
const part = str.slice(6, 12);
console.log(part);

const part2 = str.substring() // apenas em strings
console.log(part2);

 // subster - (DEPRECIADO)

 //const part3 = str.subster(6, 6);
 //console.log(part3);

 // Métodos para modificar conteúdos de uma string

 // Replace

let text = "Olá alunos Otterwise";
let newText = text.replace("Otterwise", "do curso web developer");
let newText2 = text.replaceAll("Otterwise", "teste");

console.log(newText);
console.log(newText2);

function sum(a, b) {
  return a + b;
}

// named export 
// ter varios exports dentro de um
// so pode chamar com o mesmo nome
// import precisa das chaves
export function sub(a, b) {
  return a - b;
}

function mult (a, b) {
  return a * b;
}

function div (a, b) {
  return a / b;
}

const PI = 3.14

export { mult as multiplicacao, div, PI }


// metodo principal 
// so pode ter um default por arquivo
// importa com qualquer nome
// nao precisa das chaves
export default sum; 
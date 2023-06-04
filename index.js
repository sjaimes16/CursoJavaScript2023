// let base = 30;
// let altura = 100;
//  area = base * altura;
//  console.log("area", area)

//  let baseTriangulo = 60;
//  let alturaTriangulo = 120;
//  triangulo = (base * altura) / 2;
//  console.log("triangulo", triangulo)

//  let lado = 8;
//  cuadrado = lado * lado;
//  console.log("cuadrado", cuadrado);

//Calculadora basica
let numero1 = parseInt(prompt("Escriba el primer número"));
let numero2 = parseInt(prompt("Escriba el segundo número"));
let accion = prompt("Escriba la accion (suma,resta,multiplicacion,division)");
const calculadora = (numero1, numero2, accion) => {
    let resultado;

    switch(accion){
        case 'suma':
            resultado = numero1 + numero2;
            break;
          case 'resta':
            resultado = numero1 - numero2;
            break;
          case 'multiplicacion':
            resultado = numero1 * numero2;
            break;
          case 'division':
            resultado = numero1 / numero2;
            break;
          default:
            alert('Operación inválida');
            return;
    }

    return resultado;
}

const resultado = calculadora(numero1, numero2, accion);
alert(resultado);

// Número primo
let numeroPrimo = parseInt(prompt("Escriba el número"));
const numeroPrimoFuncion = (numero) => {
    
      for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
          return alert(`El número ${numero} no es primo`);
        }
      }
    
      return alert(`El número ${numero} si es primo`);
}

const resultadoNumeroPrimo = numeroPrimoFuncion(numeroPrimo);

//Palindromo
let palabra = prompt("Escriba la palabra");
const esPalindromo = (palabra) => {
    // split convierto la palabra en un array de caracteres
    // reverse para revertir el orden de los caracteres
    // join para unir los caracteres invertidos en una nueva cadena
    const palabraPalindromo = palabra.split('').reverse().join('');
    if(palabra === palabraPalindromo){
        return alert(`La palabra ${palabra} es un palindromo`);
    } else {
        return alert(`La palabra ${palabra} no es un palindromo`);
    }
}

const resultadoPalindromo = esPalindromo(palabra);
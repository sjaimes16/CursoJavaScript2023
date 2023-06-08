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
// let numero1 = parseInt(prompt("Escriba el primer número"));
// let numero2 = parseInt(prompt("Escriba el segundo número"));
// let accion = prompt("Escriba la accion (suma,resta,multiplicacion,division)");
// const calculadora = (numero1, numero2, accion) => {
//     let resultado;

//     switch(accion){
//         case 'suma':
//             resultado = numero1 + numero2;
//             break;
//           case 'resta':
//             resultado = numero1 - numero2;
//             break;
//           case 'multiplicacion':
//             resultado = numero1 * numero2;
//             break;
//           case 'division':
//             resultado = numero1 / numero2;
//             break;
//           default:
//             alert('Operación inválida');
//             return;
//     }

//     return resultado;
// }

// const resultado = calculadora(numero1, numero2, accion);
// alert(resultado);

// Número primo
// let numeroPrimo = parseInt(prompt("Escriba el número"));
// const numeroPrimoFuncion = (numero) => {
    
//       for (let i = 2; i < numero; i++) {
//         if (numero % i === 0) {
//           return alert(`El número ${numero} no es primo`);
//         }
//       }
    
//       return alert(`El número ${numero} si es primo`);
// }

// const resultadoNumeroPrimo = numeroPrimoFuncion(numeroPrimo);

//Palindromo
// let palabra = prompt("Escriba la palabra");
// const esPalindromo = (palabra) => {
//     // split convierto la palabra en un array de caracteres
//     // reverse para revertir el orden de los caracteres
//     // join para unir los caracteres invertidos en una nueva cadena
//     const palabraPalindromo = palabra.split('').reverse().join('');
//     if(palabra === palabraPalindromo){
//         return alert(`La palabra ${palabra} es un palindromo`);
//     } else {
//         return alert(`La palabra ${palabra} no es un palindromo`);
//     }
// }

// const resultadoPalindromo = esPalindromo(palabra);

const array = [
    {
      "nombre": "Persona 1",
      "genero": "Femenino",
      "edad": 38,
      "estadoCivil": "Casado"
    },
    {
      "nombre": "Persona 2",
      "genero": "Masculino",
      "edad": 27,
      "estadoCivil": "Divorciado"
    },
    {
      "nombre": "Persona 3",
      "genero": "Masculino",
      "edad": 38,
      "estadoCivil": "Soltero"
    },
    {
      "nombre": "Persona 4",
      "genero": "Femenino",
      "edad": 60,
      "estadoCivil": "Casado"
    },
    {
      "nombre": "Persona 5",
      "genero": "Femenino",
      "edad": 19,
      "estadoCivil": "Casado"
    },
    {
      "nombre": "Persona 6",
      "genero": "Femenino",
      "edad": 20,
      "estadoCivil": "Soltero"
    },
    {
      "nombre": "Persona 7",
      "genero": "Masculino",
      "edad": 38,
      "estadoCivil": "Casado"
    },
    {
      "nombre": "Persona 8",
      "genero": "Femenino",
      "edad": 65,
      "estadoCivil": "Soltero"
    },
    {
      "nombre": "Persona 9",
      "genero": "Femenino",
      "edad": 19,
      "estadoCivil": "Soltero"
    },
    {
      "nombre": "Persona 10",
      "genero": "Masculino",
      "edad": 41,
      "estadoCivil": "Divorciado"
    },
    {
      "nombre": "Persona 11",
      "genero": "Masculino",
      "edad": 34,
      "estadoCivil": "Divorciado"
    },
    {
      "nombre": "Persona 12",
      "genero": "Femenino",
      "edad": 49,
      "estadoCivil": "Divorciado"
    },
    {
      "nombre": "Persona 13",
      "genero": "Masculino",
      "edad": 18,
      "estadoCivil": "Casado"
    },
    {
      "nombre": "Persona 14",
      "genero": "Femenino",
      "edad": 19,
      "estadoCivil": "Soltero"
    },
    {
      "nombre": "Persona 15",
      "genero": "Masculino",
      "edad": 29,
      "estadoCivil": "Soltero"
    },
    {
      "nombre": "Persona 16",
      "genero": "Femenino",
      "edad": 60,
      "estadoCivil": "Soltero"
    },
    {
      "nombre": "Persona 17",
      "genero": "Femenino",
      "edad": 43,
      "estadoCivil": "Casado"
    },
    {
      "nombre": "Persona 18",
      "genero": "Masculino",
      "edad": 66,
      "estadoCivil": "Soltero"
    },
    {
      "nombre": "Persona 19",
      "genero": "Femenino",
      "edad": 51,
      "estadoCivil": "Divorciado"
    },
    {
      "nombre": "Persona 20",
      "genero": "Masculino",
      "edad": 38,
      "estadoCivil": "Casado"
    },
    {
      "nombre": "Persona 21",
      "genero": "Masculino",
      "edad": 52,
      "estadoCivil": "Soltero"
    },
    {
      "nombre": "Persona 22",
      "genero": "Masculino",
      "edad": 65,
      "estadoCivil": "Casado"
    },
    {
      "nombre": "Persona 23",
      "genero": "Femenino",
      "edad": 49,
      "estadoCivil": "Divorciado"
    },
    {
      "nombre": "Persona 24",
      "genero": "Masculino",
      "edad": 18,
      "estadoCivil": "Divorciado"
    },
    {
      "nombre": "Persona 25",
      "genero": "Femenino",
      "edad": 48,
      "estadoCivil": "Casado"
    },
    {
      "nombre": "Persona 26",
      "genero": "Masculino",
      "edad": 46,
      "estadoCivil": "Divorciado"
    },
    {
      "nombre": "Persona 27",
      "genero": "Masculino",
      "edad": 59,
      "estadoCivil": "Casado"
    },
    {
      "nombre": "Persona 28",
      "genero": "Femenino",
      "edad": 20,
      "estadoCivil": "Casado"
    },
    {
      "nombre": "Persona 29",
      "genero": "Femenino",
      "edad": 47,
      "estadoCivil": "Divorciado"
    },
    {
      "nombre": "Persona 30",
      "genero": "Femenino",
      "edad": 18,
      "estadoCivil": "Casado"
    },
    {
      "nombre": "Persona 31",
      "genero": "Femenino",
      "edad": 65,
      "estadoCivil": "Divorciado"
    },
    {
      "nombre": "Persona 32",
      "genero": "Femenino",
      "edad": 58,
      "estadoCivil": "Divorciado"
    },
    {
      "nombre": "Persona 33",
      "genero": "Masculino",
      "edad": 58,
      "estadoCivil": "Divorciado"
    },
    {
      "nombre": "Persona 34",
      "genero": "Femenino",
      "edad": 30,
      "estadoCivil": "Casado"
    },
    {
      "nombre": "Persona 35",
      "genero": "Femenino",
      "edad": 67,
      "estadoCivil": "Divorciado"
    },
    {
      "nombre": "Persona 36",
      "genero": "Femenino",
      "edad": 22,
      "estadoCivil": "Casado"
    },
    {
      "nombre": "Persona 37",
      "genero": "Masculino",
      "edad": 23,
      "estadoCivil": "Divorciado"
    },
    {
      "nombre": "Persona 38",
      "genero": "Masculino",
      "edad": 33,
      "estadoCivil": "Soltero"
    },
    {
      "nombre": "Persona 39",
      "genero": "Masculino",
      "edad": 53,
      "estadoCivil": "Soltero"
    },
    {
      "nombre": "Persona 40",
      "genero": "Femenino",
      "edad": 27,
      "estadoCivil": "Divorciado"
    },
    {
      "nombre": "Persona 41",
      "genero": "Masculino",
      "edad": 43,
      "estadoCivil": "Casado"
    },
    {
      "nombre": "Persona 42",
      "genero": "Masculino",
      "edad": 49,
      "estadoCivil": "Divorciado"
    },
    {
      "nombre": "Persona 43",
      "genero": "Masculino",
      "edad": 56,
      "estadoCivil": "Casado"
    },
    {
      "nombre": "Persona 44",
      "genero": "Femenino",
      "edad": 27,
      "estadoCivil": "Casado"
    },
    {
      "nombre": "Persona 45",
      "genero": "Femenino",
      "edad": 41,
      "estadoCivil": "Divorciado"
    },
    {
      "nombre": "Persona 46",
      "genero": "Femenino",
      "edad": 58,
      "estadoCivil": "Casado"
    },
    {
      "nombre": "Persona 47",
      "genero": "Masculino",
      "edad": 18,
      "estadoCivil": "Casado"
    },
    {
      "nombre": "Persona 48",
      "genero": "Femenino",
      "edad": 23,
      "estadoCivil": "Divorciado"
    },
    {
      "nombre": "Persona 49",
      "genero": "Femenino",
      "edad": 47,
      "estadoCivil": "Casado"
    },
    {
      "nombre": "Persona 50",
      "genero": "Masculino",
      "edad": 21,
      "estadoCivil": "Casado"
    }
  ]

const filtarMasculino = array.filter(persona => {
    return persona.genero === "Masculino" 
});

// console.log(filtarMasculino)
// console.log(filtarMasculino.length)

const filtarFemenino = array.filter(persona => {
    return persona.genero === "Femenino" 
});

// console.log(filtarFemenino)
// console.log(filtarFemenino.length)

const menorAVeinte = array.filter(persona => {
    return persona.edad < 20    
});

// console.log(menorAVeinte)
// console.log(menorAVeinte.length)

const mayorA35 = array.filter(persona => {
    return persona.edad > 35    
});

// console.log(mayorA35)
// console.log(mayorA35.length)

const mayorA65 = array.filter(persona => {
    return persona.edad > 65    
});

// console.log(mayorA65)
// console.log(mayorA65.length)

const soltero = array.filter(persona => {
    return persona.estadoCivil === "Soltero"
});

// console.log(soltero)
// console.log(soltero.length)

const casado = array.filter(persona => {
    return persona.estadoCivil === "Casado"
});

// console.log(casado)
// console.log(casado.length)

const divorciado = array.filter(persona => {
    return persona.estadoCivil === "Divorciado"
});

// console.log(divorciado)
// console.log(divorciado.length)

const generoEstadoCivil = array.filter(persona => {
    return persona.genero === "Masculino" && persona.estadoCivil === "Casado"
});

// console.log(generoEstadoCivil)
// console.log(generoEstadoCivil.length)

const generoEdadMayor40 = array.filter(persona => {
    return persona.genero === "Masculino" || persona.edad > 40 
});

// console.log(generoEdadMayor40)
// console.log(generoEdadMayor40.length)

const generoEdadMenor30 = array.filter(persona => {
    return persona.genero === "Femenino" && persona.edad < 30 || persona.estadoCivil === "Casado"
});

console.log(generoEdadMenor30)
console.log(generoEdadMenor30.length)

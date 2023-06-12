const generoAleatorio = () => {
    const generos = ["Masculino", "Femenino"];
    return generos[Math.floor(Math.random() * generos.length)];
  };
  
  const estadoCivilAleatorio = () => {
    const estadosCiviles = ["Soltero", "Casado", "Divorciado"];
    return estadosCiviles[Math.floor(Math.random() * estadosCiviles.length)];
  };
  
  const nombres = ["Juan", "María", "Pedro", "Ana", "Luis", "Laura", "Carlos", "Sofía", "Andrés", "Valentina"];
  const personas = [];
  
  for (let i = 0; i < 10; i++) {
    const id = Math.floor(Math.random() * 50);
    const nombre = nombres[Math.floor(Math.random() * nombres.length)];
    // const genero = generoAleatorio();
    const edad = Math.floor(Math.random() * 50) + 18; // Edad entre 18 y 67 años
    // const estadoCivil = estadoCivilAleatorio();
    const numeroMascotas = Math.floor(Math.random() * 5);
  
    const persona = {
      id,
      nombre,
      edad,
      numeroMascotas
    };
  
    personas.push(persona);
  }
  
  console.log(personas);
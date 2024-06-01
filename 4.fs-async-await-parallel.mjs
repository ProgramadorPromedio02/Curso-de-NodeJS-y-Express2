// Esto solo en los modulos nativos
// que no tienen promesas nativas

// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)

import { readFile } from 'node:fs/promises'

// Parapeliza la sincronica
Promise.all([
  readFile('./archivo.txt', 'utf-8'),  // Lee el primer archivo en paralelo
  readFile('./archivo2.txt', 'utf-8')  // Lee el segundo archivo en paralelo
])
.then(([text, secondText]) => {
  // Se ejecuta cuando ambas lecturas se han completado
  console.log('primer texto:', text);      // Imprime el contenido del primer archivo
  console.log('segundo texto:', secondText); // Imprime el contenido del segundo archivo
})

const path = require('node:path')

//`./content/subfolder/test.txt` // ❌MALA PRACTICA❌

// Depenciendo del SO(Sistema Operativo)
// -> unix /
// -> windows \

// Barra separadora de carpetas segun SO
console.log(path.sep)

// Unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

// Devuelve el nombre del fichero
const base = path.basename('./tmp/midu-secret-files/password.txt')
console.log(base)

const filename = path.basename('./tmp/midu-secret-files/password.txt', '.txt') // Puedes quitar la extension del fichero
console.log(filename)

// Devolver solo la extension de un fichero
const extension = path.extname('my.super.image.jpg')
// const extension = path.extname('image.jpg')
console.log(extension)
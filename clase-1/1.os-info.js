const os = require('node:os')

console.log('Información del sistema operativo')
console.log('-------------------------')

console.log('Nombre del sisteme operativo ', os.platform())
console.log('Versión del sitema operativo', os.release())
console.log('Arquitectura', os.arch())
console.log('CPUs', os.cpus()); // <--- Vamos a poder escolar procesos en Node.js
console.log('Memoria libre', os.freemem() / 1024 / 1024)
console.log('Memoria total', os.totalmem() / 1024 / 1024)
console.log('uptime', os.uptime() / 60 / 60)

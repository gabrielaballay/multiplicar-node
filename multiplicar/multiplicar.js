const fs = require('fs');
const colors = require('colors');

let data = '';

//module.exports.crearArchivo = (base) => {
let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`.red);
            return;
        }
        for (let i = 1; i <= limite; i++) {

            data += `${base} X ${i} = ${ base * i }\n`.green;

        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`.green);
        });
    });
}

let listarTabla = (base, limite) => {

    if (!Number(base)) {
        reject(`El valor introducido ${base} no es un numero`.red);
        return;
    }
    console.log('================='.yellow);
    console.log(`Tabal de ${base}`.yellow);
    console.log('================='.yellow);

    for (let i = 1; i <= limite; i++) {

        console.log(`${base} X ${i} = ${ base * i }`.bold.bgWhite.blue);

    }

}

module.exports = {
    crearArchivo,
    listarTabla
}
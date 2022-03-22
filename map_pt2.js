function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin'){
            admins.push(key)
        }
    }
    return admins
}

const usuarios = new Map();

usuarios.set('Luiz','Admin');
usuarios.set('Paulo','Admin');
usuarios.set('Jorge','Admin');
usuarios.set('Natalia','User');
usuarios.set('Stephany','User');

console.log(getAdmins(usuarios))
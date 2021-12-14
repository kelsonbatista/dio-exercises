//funcoes chaveadas MAP e SET

const usersAdmin = new Map();

usersAdmin.set('Jose', 'admin');
usersAdmin.set('Maria', 'admin');
usersAdmin.set('Joao', 'admin');
usersAdmin.set('Pedro', 'user');

function getAdmins(map) {
  let admins = [];

  for([key, value] of map) {
    if(value === 'admin') admins.push(key);
  }
  return admins;
}

console.log(getAdmins(usersAdmin));
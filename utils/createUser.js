// La función "createUser" recibirá la información del nuevo usuario,
// creará un objeto siguiendo el modelo de los usuarios del
// archivo "users.js", lo añadirá AL PRINCIPIO de la lista de usuarios
// y devolverá la nueva lista


function createUser(first_name,last_name,age,country,holdUsers) { 
    
    let newId = holdUsers.length + 1;

    let newUser =  
    {
        id:newId,
        first_name: first_name,
        last_name: last_name,
        age : age,
        country: country

    }

    holdUsers.unshift(newUser)
    return holdUsers
   
}

export default createUser;
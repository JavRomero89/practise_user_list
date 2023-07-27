// La función "filterUserByAge" extraerá de la lista los usuarios 
// que cumplan con las condiciones de edad, y devolverá una nueva lista
// con los usuarios filtrados
// Los parámetros de edad son:
//     - "all": devolver todos los usuarios
//     - "young": usuarios de menos de 29 años (incluido 29)
//     - "adult": usuarios de entre 30 y 64 años (ambos incluidos)
//     - "retired": usuarios de más de 65 años (incluido 65)


function filterUsersByAge(filterAge, holdUsers) {
    let filteredUsers;

    switch(filterAge) {
        case "all":
            filteredUsers = holdUsers;
            break;
        case "young":
            filteredUsers = holdUsers.filter(user => user.age <= 29);
            break;
        case "adult":
            filteredUsers = holdUsers.filter(user => user.age >= 30 && user.age <= 64);
            break;
        case "retired":
            filteredUsers = holdUsers.filter(user => user.age >= 65);
            break;
        default:
            filteredUsers = [];
    }

    return filteredUsers;
}


// La función "filterUserByCountry" extraerá de la lista los usuarios 
// que cumplan con la condición de país, y devolverá una nueva lista
// con los usuarios filtrados

function filterUsersByCountry(filterCountry, holdUsers) {
    
    let newFilterCountry = holdUsers.filter((user) => user.country == filterCountry);

    return (newFilterCountry)
    
}

export {filterUsersByAge, filterUsersByCountry}


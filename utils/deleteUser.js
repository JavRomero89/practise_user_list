// La función "deleteUser" debe buscar el usuario dentro de la lista,
// eliminarlo, y devolver la nueva lista sin el usuario en cuestión

function deleteUser(deleteName, holdUsers) {
    let locateUser = holdUsers.filter((user) => user.last_name !== deleteName);
    return locateUser

}

export default deleteUser;
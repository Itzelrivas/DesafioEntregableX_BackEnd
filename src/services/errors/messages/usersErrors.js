//Los parametros no están completos al momento de registrar un usuario con passport 
export const registerUserErrorInfoESP = (user) => {
    return `Uno o más campos no estan llenados, o tienen datos no válidos.
    Recuerda que tienes que llenar los siguientes datos:
        -> first_name: type String, recibido: ${user.first_name}
        -> last_name: type String, recibido: ${user.last_name}
        -> email: type String, recibido: ${user.email}
        -> edad: type Number, recibido: ${user.age}
        -> contraseña: type String, recibido: ${user.password}
    `;
}

export const registerUserErrorInfoENG = (user) => {
    return `One or more fields are not filled in, or have invalid data.
    Remember that you have to fill in the following data:
        -> first_name: type String, received: ${user.first_name}
        -> last_name: type String, received: ${user.last_name}
        -> email: type String, received: ${user.email}
        -> age: type Number, received: ${user.age}
        -> password: type String, received: ${user.password}
    `;
}
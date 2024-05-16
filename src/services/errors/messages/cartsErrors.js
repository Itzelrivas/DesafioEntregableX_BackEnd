//No se proporciona un id o el valor que se proporciona no es del tipo adecuado para poder proporcionar un carrito
export const searchCartErrorInfoESP = (cartId) => {
    return `El campo de id no esta llenado, o tiene datos no válidos.
    Recuerda que tienes que el id para poder buscar el carrito:
        -> cartId: type Number, recibido: ${cartId}
    `;
}
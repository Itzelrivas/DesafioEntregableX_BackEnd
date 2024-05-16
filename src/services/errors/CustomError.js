export default class CustomError {
    static createError({ name, cause, message, code = 1 }){
        console.log("este es el mensaje: ")
        console.log(typeof message)
        const error = new Error(message); 
        error.name = name;
        error.code = code;
        error.cause = cause ? new Error(cause) : null
        throw error; //Esto es para que retorne el error
    }
}

/*class CustomErrorInstance extends Error {
    constructor(name, cause, message, code) {
        super(message);
        this.name = name;
        this.code = code;
        this.cause = cause ? new Error(cause) : null;
    }
}

export default class CustomError {
    static createError({ name, cause, message, code = 1 }) {
        return new CustomErrorInstance(name, cause, message, code);
    }
}*/
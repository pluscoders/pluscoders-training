function FormatError(message) {
    Error.call(this, message)

    this.message = message

    if (Error.captureStackTrace)
        Error.captureStackTrace(this, FormatError)

    this.name = FormatError.name
}

FormatError.prototype = Object.create(Error.prototype)
FormatError.prototype.constructor = FormatError

function ClientError(message) {
    Error.call(this, message)

    this.message = message

    if (Error.captureStackTrace)
        Error.captureStackTrace(this, ClientError)

    this.name = ClientError.name
}

ClientError.prototype = Object.create(Error.prototype)
ClientError.prototype.constructor = ClientError

function ServerError(message) {
    Error.call(this, message)

    this.message = message

    if (Error.captureStackTrace)
        Error.captureStackTrace(this, ServerError)

    this.name = ServerError.name
}

ServerError.prototype = Object.create(Error.prototype)
ServerError.prototype.constructor = ServerError
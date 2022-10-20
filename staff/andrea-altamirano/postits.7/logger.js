const logger = {
    debug(message) {
        console.log(`%cDEBUG ${new Date().toISOString()} ${message}`, 'color: green;')
    },

    info(message) {
        console.log(`%cINFO ${new Date().toISOString()} ${message}`, 'color: blue;')
    },

    warn(message) {
        console.log(`%cWARN ${new Date().toISOString()} ${message}`, 'color: orange;')
    },

    error(message) {
        console.log(`%cERROR ${new Date().toISOString()} ${message}`, 'color: red;')
    },

    fatal(message) {
        console.log(`%cFATAL ${new Date().toISOString()} ${message}`, 'color: white; background-color: red;')
    }
}
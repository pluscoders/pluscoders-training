function checkToken(token) {
    const [,payload64] = token.split('.')

    const payloadJson = atob(payload64)

    const payload = JSON.parse(payloadJson)

    if (Date.now() > payload.exp * 1000) throw new Error('token expired')
}
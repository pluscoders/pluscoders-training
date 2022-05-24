import { validateNumber } from '../utils/validators'

function substract (a, b) {
    validateNumber(a)
    validateNumber(b)

    return a - b
}

export default substract 
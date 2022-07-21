/*
function Laptop(brand, model) {
    this.brand = brand
    this.model = model
    this.status = 'off'
}

Laptop.prototype.switchOn = function() {
    console.log('switch on')
    
    this.status = 'on'
}

Laptop.prototype.switchOff = function() {
    console.log('switch off')
    
    this.status = 'off'
}

Laptop.prototype.reset = function() {
    console.log('reset')

    this.switchOff()
    this.switchOn()
}
/**/

/**/
class Laptop {
    constructor(brand, model) {
        this.brand = brand
        this.model = model
        this.status = 'off'
    }

    switchOn() {
        console.log('switch on')
        
        this.status = 'on'
    }

    switchOff() {
        console.log('switch off')
        
        this.status = 'off'
    }

    reset() {
        console.log('reset')
        
        this.switchOff()
        this.switchOn()
    }
}
/**/

var macbook = new Laptop('Apple', 'MacBookPro 2022')
var asus = new Laptop('Acer', 'Aspire 2022')

console.log(macbook)
macbook.switchOn()
console.log(macbook)
macbook.reset()
console.log(macbook)
// VM2489:60 Laptop {brand: 'Apple', model: 'MacBookPro 2022', status: 'off'}
// VM2489:37 switch on
// VM2489:62 Laptop {brand: 'Apple', model: 'MacBookPro 2022', status: 'on'}
// VM2489:49 reset
// VM2489:43 switch off
// VM2489:37 switch on
// VM2489:64 Laptop {brand: 'Apple', model: 'MacBookPro 2022', status: 'on'}
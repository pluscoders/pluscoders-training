describe('join()')

// 1

var spec = 'should concatenating ["Fire", "Air", "Water"] and return a new string [FireAirWater]'

var array = ['Fire','Air','Water'];
var string = ''

var string = join(array,'') 

assert(string === 'FireAirWater', spec)

// 2

var spec = 'should concatenating ["Fire", "Air", "Water"] and return a new string [FireAirWater]'

var array = ['Fire','Air','Water'];
var string = ''

var string = join(array,'+') 

assert(string === 'Fire+Air+Water', spec)


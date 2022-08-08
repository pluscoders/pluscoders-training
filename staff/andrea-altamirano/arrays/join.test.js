// tests
const elements = ["Fire", "Air", "Water"];

// case 1
console.log(join(elements));
// expected output: "Fire,Air,Water"

// case 2
console.log(join(elements, ""));
// expected output: "FireAirWater"

// case 3
console.log(join(elements, "-"));
// expected output: "Fire-Air-Water"

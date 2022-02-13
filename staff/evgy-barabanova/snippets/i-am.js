//if "age" is less than or equal to 1 year, it returns the word "baby"
//if "age" is older than 1 year, but less than or equal to 5, it returns the word "child"
//if "age" is over 5 years old, but under 15, it returns "kid"
//if "age" is greater than or equal to 15 years, but less than 18, it returns the word "teen"
//if "age" is greater than or equal to 18 years, but less than 65, it returns the word "adult"
//if "age" is greater than or equal to 65 years, it returns the word "elder"

//function color(number) {
//if (number < 1) return "blue"
//else if (number >= 1) return "red"
function iAm(age) {
  if (age <= 1)
   return "baby";
  else if (age >= 1 && age < 5) 
  return "child";
  else if (age >= 5 && age < 15) 
  return "kid";
  else if (age >= 15 && age < 18) 
  return "teen";
  else if (age >= 18 && age < 65) 
  return "adult";
  else if (age >= 65) 
  return "elder";
}

function size(number) {
  if (number < 32)
    return 'S'
  else if (number >= 32 && number < 42)
    return 'M'
  else if (number > 42)
    return 'L'
}
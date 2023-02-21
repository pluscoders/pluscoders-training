function iAm(age, gender) {
  if (age <= 1 && gender == "female") return "👶💜";
  if (age <= 1 && gender == "male") return "👶💙";
  else if (age >= 1 && age < 5 && gender == "female") return "👧🐻";
  else if (age >= 5 && age < 15 && gender == "female") return "👧✍️";
  else if (age >= 15 && age < 18 && gender == "female") return "👧💄";
  else if (age >= 18 && age < 65 && gender == "female") return "👩";
  else if (age >= 65 && age < 135 && gender == "female") return "👵";
  else if (age >= 135 && gender == "female") return "👽";
  else if (age >= 5 && age < 15 && gender == "male") return "👶🚗";
  else if (age >= 5 && age < 15 && gender == "male") return "👦🔫";
  else if (age >= 15 && age < 18 && gender == "male") return "👦🕹️";
  else if (age >= 18 && age < 65 && gender == "male") return "👨";
  else if (age >= 65 && age < 135 && gender == "male") return "👴";
  else if (age >= 135 && gender == "male") return "💀";
}

console.log(iAm(44, 'male'))

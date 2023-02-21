function count(number) {
  for (var i = 0; i < number; i++) {
    console.log("Manushka❤");
  }
}

count(7);


function wait(millis) {
  var before = Date.now('September 09 2020');

  while (Date.now() - before < millis);
}

for (var i = 0; i < 50; i++) {
  console.clear()

  console.log('Evgy'.repeat(i) + '✈')

  wait(200)
}

// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

function makeUrl(name) {
  return "https://pokeapi.co/api/v2/" + name;
}

test("Correctly creates URL from name", () => {
  const name = "pikachu";
  const result = makeUrl(name);
  const expected = "https://pokeapi.co/api/v2/pikachu";
  equal(result, expected);
});


function searchParamsToObject(params) {
  const searchParams = new URLSearchParams(params);
  return Object.fromEntries(searchParams);
}

function isLeapYear(year) {
  if (typeof year !== 'number' || year <= 0) {
    return 'Invalid input';
  }

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

// Test for regular leap years
test("2020 is a leap year", () => {
  const result = isLeapYear(2020);
  const expected = true;
  equal(result, expected);
});

// Test for years divisible by 100 but not by 400
test("1900 is not a leap year", () => {
  const result = isLeapYear(1900);
  const expected = false;
  equal(result, expected);
});

// Test for years divisible by 400
test("2000 is a leap year", () => {
  const result = isLeapYear(2000);
  const expected = true;
  equal(result, expected);
});

// Test for string input
test("String input returns 'Invalid input'", () => {
  const result = isLeapYear("2000");
  const expected = 'Invalid input';
  equal(result, expected);
});

// Test for negative years
test("Negative year returns 'Invalid input'", () => {
  const result = isLeapYear(-2000);
  const expected = 'Invalid input';
  equal(result, expected);
});






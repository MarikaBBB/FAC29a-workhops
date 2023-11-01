// testing map()

test("map() should return an array with the same number of elements", () => {
  const result = map([1], () => {});
  equal(result.length, 1);
});

test("map() should transform each element of the array using the fn argument", () => {
  const result = map([1], (x) => x + 1);
  equal(result[0], 2);
});

test("map() should transform each element of the array using the fn argument", () => {
  const result = map([1,2,3], (x) => x + 1);
  equal(result[0], 2);
  equal(result[1], 3);
  equal(result[2], 4);
});

test("map() should transform each element of the array using the fn argument", () => {
  const result = map(["ciao", "mondo"], (mondo, index) => `${mondo}-${index}`);
  equal(result[0], "ciao-0"); // The first element should be "ciao-0"
  equal(result[1], "mondo-1"); // The second element should be "mondo-1"
});


// testing filter()

// Test case where no elements should pass the test
test("filter() should return an empty array if no elements pass the test", () => {
  const result = filter([1, 2, 3], (x) => x > 3);
  equal(result.length, 0);
});

// Test case where some elements should pass the test
test("filter() should return an array with only the elements that pass the test", () => {
  const result = filter([1, 2, 3, 4], (x) => x > 2);
  equal(result.length, 2);
  equal(result[0], 3);
  equal(result[1], 4);
});

// Test case where all elements should pass the test
test("filter() should return the same array if all elements pass the test", () => {
  const result = filter([1, 50], (x) => x > 0);
  equal(result.length, 2);
  equal(result[0], 1);
  equal(result[1], 50);
});

// test every()
// Define the custom expect function
function expect(actual, expected) {
  if (actual !== expected) {
    throw new Error(`Test failed: expected ${expected}, got ${actual}`);
  }
}

test("every() should return true if every element passes the test", () => {
  const result = every([100, 200], (x) => x > 10);
  equal(result, true);
});

test("every() should return false if any element fails the test", () => {
  const result = every([1, 100], (x) => x > 10);
  equal(result, false);
});
  
// test some()
function expect(actual, expected) {
  if (actual !== expected) {
    throw new Error(`Test failed: expected ${expected}, got ${actual}`);
  }
}

// Tests for 'some' function
test("some() should return true if at least one element passes the test", () => {
  const result = some([100, 200], (x) => x > 10);
  expect(result, true);
});

test("some() should return false if no elements pass the test", () => {
  const result = some([1, 2], (x) => x > 10);
  expect(result, false);
});

// testing find()
test("find() should return the first element that passes the test", () => {
  const result = find([100, 200], (x) => x > 10);
  equal(result, 100, "Should be able to find the first element");
  
  const result2 = find([100, 200, 300], (x) => x > 150);
  equal(result2, 200, "Should be able to find elements that are not first");
});

test("find() should return undefined if no element passes the test", () => {
  const result = find([1, 2], (x) => x > 10);
  equal(result, undefined);
});

// testing reduce()
test("reduce() should reduce an array to a single value using the reducer function", () => {
  const sum = reduce([1, 2, 3], (total, x) => total + x, 0);
  equal(sum, 6);
});

test("reduce() should work with an initial value different from 0", () => {
  const sum = reduce([1, 2, 3], (total, x) => total + x, 10);
  equal(sum, 16);
});

test("reduce() should work with other types of operations, like multiplication", () => {
  const product = reduce([1, 2, 3, 4], (total, x) => total * x, 1);
  equal(product, 24);
});

test("reduce() should handle empty arrays with an initial value", () => {
  const value = reduce([], (total, x) => total + x, 0);
  equal(value, 0);
});

test("reduce() should throw an error if the array is empty and no initial value is provided", () => {
  try {
    reduce([], (total, x) => total + x);
  } catch (e) {
    equal(e instanceof TypeError, true);
  }
});

// testing flat()

test("flat() should turn a nested array into a single-level array", () => {
  const result = flat([1, [2, 3]]);
  equal(result[0], 1);
  equal(result[1], 2);
  equal(result[2], 3);
});

test("flat() should flatten nested arrays 2 levels deep", () => {
  const result = flat([1, [2, [3]]], 2);
  equal(result[0], 1);
  equal(result[1], 2);
  equal(result[2], 3);
});
//  Challenge 1
 
//  Test for the add operation
test('should add two numbers', function () {
  const result = calculate(2, "+", 3);
  equal(result, 5, "2 + 3 should be 5");
});

// Test for the subtract operation
test('should subtract two numbers', function () {
  const result = calculate(5, "-", 3);
  equal(result, 2, "5 - 3 should be 2");
});

// Test for the multiply operation
test('should multiply two numbers', function () {
  const result = calculate(3, "*", 4);
  equal(result, 12, "3 * 4 should be 12");
});

// Test for the divide operation
test('should divide two numbers', function () {
  const result = calculate(8, "/", 2);
  equal(result, 4, "8 / 2 should be 4");
});

// Test for invalid sign
test('should return error for invalid sign', function () {
  const result = calculate(8, "%", 2);
  equal(result, "Please enter a valid sign (+, -, *, /)", "Invalid sign should return an error message");
});

// Test for string input
test('should handle strings that can be converted to numbers', function () {
  const result = calculate("8", "/", "2");
  equal(result, 4, "'8' / '2' should be 4");
});


// Challenge 2
test("Update result when form is submitted", () => {
  // simulate user input
  const aInput = document.querySelector("input[name='a']");
  aInput.value = "5"; 
  
  const signInput = document.querySelector("select");
  signInput.value = "+"; 
  
  const bInput = document.querySelector("input[name='b']");
  bInput.value = "3"; 

  // Simulate form submission
  const submitButton = document.querySelector("button[type='submit']");
  submitButton.click(); 

  // Check the result
  const result = document.querySelector("#result");
  equal(result.textContent, "8", "Expected result of 5 + 3 to be 8"); 

  // reset the page
  result.textContent = ""; 
});



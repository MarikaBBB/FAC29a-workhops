function map(array, transform) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(transform(array[i], i));
  }
  return result;
}


// function filter(array, fn) {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     if(fn(array[i])){
//       result.push(i);
//     }  
//   }
//   return result;

// }

function filter(array, fn) {
  const filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    const el = array[i];
    const shouldKeep = fn(el, i);
    if (shouldKeep) filteredArray.push(el);
  }
  return filteredArray;
}

function every(array, fn) {
  for (let i = 0; i < array.length; i++) {
    if (!fn(array[i], i, array)) {
      return false;
    }
  }
  return true;
}

function some(array, fn) {
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i], i, array)) {
      return true;
    }
  }
  return false;
}

function find(array, fn) {
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i], i, array)) {
      return array[i];
    }
  }
  return undefined;
}

function reduce(array, reducer, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : array[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < array.length; i++) {
    accumulator = reducer(accumulator, array[i]);
  }

  if (startIndex === 1 && array.length === 0) {
    throw new TypeError('Reduce of empty array with no initial value');
  }

  return accumulator;
}

function flat(array, depth = 1) {
  const result = [];
  for (const item of array) {
    if (Array.isArray(item) && depth > 0) {
      result.push(...flat(item, depth - 1));
    } else {
      result.push(item);
    }
  }
  return result;
}


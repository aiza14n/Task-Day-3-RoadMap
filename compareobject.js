function areObjectsEqual(obj1, obj2) {
    const array1 = Object.entries(obj1).sort();
    const array2 = Object.entries(obj2).sort();
  
    return JSON.stringify(array1) === JSON.stringify(array2);
  }
  
  let obj1 = { name: "Person 1", age: 5 };
  let obj2 = { age: 5, name: "Person 1" };
  
  if (areObjectsEqual(obj1, obj2)) {
    console.log("The objects are equal.");
  } 
  else {
    console.log("The objects are not equal.");
  }
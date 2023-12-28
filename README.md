# Task-Day-3-RoadMap
# How to compare two JSON have the same properties without Order ?
>- ## a. let obj1 = { name: "Person 1" , age:5 };
>- ## b. let obj2 = { age:5, name: "Person 1" };

```javascript
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
  ```

1. ### Function Definition:
We define a function called 'areObjectsEqual' that takes two objects, 'obj1' and 'obj2', as parameters.

2. ### Convert Objects to Arrays:
>- We convert both 'obj1' and 'obj2' into arrays of key-value pairs. This is done using 'Object.entries(obj)'.
>- So, 'array1' will be an array of key-value pairs from 'obj1', and 'array2' will be an array of key-value pairs from 'obj2'.

3. ### Sort Arrays:
>- We sort both arrays alphabetically. This ensures that even if the order of properties in the objects is different, the order in the arrays will be the same.

4. ### Compare Arrays:
>- We convert both sorted arrays into strings using 'JSON.stringify'.
>- We then compare the two strings. If they are the same, it means the original objects are equal.

5. ### Output the Result:
>- Depending on whether the objects are equal or not, the program prints either "The objects are equal." or "The objects are not equal."

### In simple terms, this code is like comparing two lists of things. It doesn't care about the order of the things in the list, only whether the lists have the same things. If the lists are the same, it says, "The objects are equal." If not, it says, "The objects are not equal.
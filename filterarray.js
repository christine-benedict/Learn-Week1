//create a function that takes an array input
function filterArrayValues(originalArray){
  //make a variable to store our new array items
  var newArray = []
  //take each element within the array for comparison
  originalArray.forEach(function (element){
    //if the element does not equal one of our cases
    if (element != false && element != null && element != 0 && element != ""){
      //put it into a new array
      newArray.push(element)
    }
  })
  //return the new array after each element is compared and pushed into new array
  return newArray
}

filterArrayValues([58, '', 'abcd', true, null, false, 0])

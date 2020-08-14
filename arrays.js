var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(element, array){
  var newArray = [element, ...array ];
  
  return newArray;
}




function destructivelyAddElementToBeginningOfArray(array, element) {
  
  var newArray = array.unshift(element);
  
  return newArray
  
}

function accessElementInArray(array){
  return array(n)
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift();
}

function removeElementFromBeginningOfArray(array){
  array.unshift()
}


function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  
}


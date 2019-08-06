var recipes = {};


function updateObjectWithKeyAndValue(object, key, value){
  var newObject = Object.assign({}, object, recipes);
  return newObject;
}



var recipes = {};


function updateObjectWithKeyAndValue(object, key, value){
  var newObject = Object.assign({}, object);
  return newObject;
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}


function deleteFromObjectByKey(object, key){
  var nObject = Object.assign({}, object);
  delete nObject.key;
  return nObject;
}



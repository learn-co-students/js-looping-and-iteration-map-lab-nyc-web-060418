// Code your solution in this file.
function lowerCaseDrivers(array) {
  const newArray = array.map(function(str) {return str.toLowerCase()});
  return newArray;
}
function nameToAttributes(array) {
  const newArray = array.map(function(str) {let nameArray = str.split(" ");
    return {firstName: nameArray[0], lastName: nameArray[1]}});
  return newArray;
}
function attributesToPhrase(array) {
  const newArray = array.map(function(obj) {return `${obj.name} is from ${obj.hometown}`});
  return newArray;
}

// Code your solution in this file.
function lowerCaseDrivers(array) {
  let newArr = array.map(function(driver) {
    return driver.toLowerCase();
  });
 return newArr;
}

function nameToAttributes(array) {
  let newArr = array.map(function(driver) {
    let nameArr = driver.split(" ");
    return {firstName: nameArr[0], lastName: nameArr[1]};
  });
  return newArr;
}

function attributesToPhrase(array) {
  let newArr = array.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`;
  });
  return newArr;
}

// Code your solution in this file.

function lowerCaseDrivers (array) {
  return array.map(function (driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes (array) {
  return array.map(function(name){
    // debugger
    let first = name.split(' ')[0]
    let second = name.split(' ')[1]
    return {firstName: first, lastName: second};
  });
}

function attributesToPhrase (array){
  return array.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`;
  });
}

// Code your solution in this file.

function lowerCaseDrivers (array) {
  return array.map(function (driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes (array) {
  return array.map(function(name){
    // debugger
    let nameArr = name.split(` `)
    return {firstName: nameArr[0], lastName: nameArr[1]};
  });
}

function attributesToPhrase (array){
  return array.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`;
  });
}

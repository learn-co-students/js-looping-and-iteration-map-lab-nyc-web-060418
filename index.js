// Code your solution in this file.

function lowerCaseDrivers(driver_array) {
  return driver_array.map(
    function (driver) { return driver.toLowerCase();});
}

function nameToAttributes(driver_array) {
  return driver_array.map(
    function (driver) {

      first_name = driver.split(" ")[0]
      last_name = driver.split(" ")[1]

      return name_object = Object.assign({}, {firstName: first_name, lastName: last_name});
    });
}

function attributesToPhrase(obj_array) {
  return obj_array.map(
    function (driver) {
      return `${driver.name} is from ${driver.hometown}`;
    }
  )
}

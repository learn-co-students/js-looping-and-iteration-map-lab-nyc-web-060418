// Code your solution in this file.
function lowerCaseDrivers (drivers) {
    const lowerDrivers = drivers.map(x => x.toLowerCase());
    return lowerDrivers;
}

function nameToAttributes(drivers) {
  return drivers.map( function (driver) {
    const nameArray = driver.split(" ");
    const fName = nameArray[0];
    const lName = nameArray[1];

    return {firstName: fName, lastName: lName};
  });
}

function attributesToPhrase(drivers) {
  return drivers.map( obj => {
    let rObj = {};
    rObj[firstName] =
  }
  });

}

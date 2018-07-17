// Code your solution in this file.
function lowerCaseDrivers(drivers){
    return drivers.map(function(driver) {return driver.toLowerCase();})
};

function nameToAttributes(drivers){
    return drivers.map( function (driver) {
        const namesArray = driver.split(" ");
        first = namesArray[0];
        last = namesArray[1];
        return {firstName: first, lastName: last}
    })
}

function attributesToPhrase(drivers){
    return drivers.map( function (driver) {
        return `${driver["name"]} is from ${driver["hometown"]}`
    })
}
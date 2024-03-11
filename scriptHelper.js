// Write your helper functions here!
require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 

 //function to determine if testInput is empty, a number, or string
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else if (!isNaN(testInput)) {
        return "Is a Number";
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // first three if statements are validating fields - no point in running rest of code if these do not pass

    // make sure all inputs are not empty
    if (validateInput(pilot.value) === "Empty" || validateInput(copilot.value) === "Empty" || validateInput(fuelLevel.value) === "Empty" || validateInput(cargoLevel.value) === "Empty") {
        //alert("All fields are required!");
        return
    }

    // make sure pilot & copilot are strings
    if (validateInput(pilot.value) === "Is a Number" || validateInput(copilot.value) === "Is a Number") {
        //alert("Pilot AND copilot inputs must be strings");
        return
    } 

    // make sure fuelLevel & cargoLevel inputs are numbers
    if (validateInput(fuelLevel.value) === "Not a Number" || validateInput(cargoLevel.value) === "Not a Number") {
        //alert("Fuel AND cargo level must be number inputs");
        return
    }
    
    // grabbing elements from the DOM - no point in initializing if validation fails
    const pilotStatus = document.getElementById("pilotStatus")
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");
    const launchStatus = document.getElementById("launchStatus");

    // after validation, pilot info text should change
    pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`
    copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`

    // update fuelStatus depending on fuelLevel input
    if (fuelLevel.value < 10000) {
        list.style.visibility = "visible";
        fuelStatus.innerHTML = "Fuel level too low for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
    } else {
        fuelStatus.innerHTML = "Fuel level high enough for launch"
    }

    // update cargoStatus depending on cargoLevel input
    if (cargoLevel > 10000) {
        list.style.visibility = "visible";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
    } else {
        cargoStatus.innerHTML = "Cargo mass low enough for launch"
    }

    // if every field passes all above checks, should be ready to launch
    if (fuelStatus.innerHTML === `Fuel level high enough for launch` && cargoStatus.innerHTML === `Cargo mass low enough for launch`) {
        list.style.visibility = `hidden`;
        launchStatus.innerHTML = `Shuttle is Ready for Launch`;
        launchStatus.style.color = `green`;
    } 
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;
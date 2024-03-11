// Write your JavaScript code here!

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    // let listedPlanetsResponse;
    // listedPlanetsResponse.then(function (result) {
    //     listedPlanets = result;
    //     console.log(listedPlanets);
    // }).then(function () {
    //     console.log(listedPlanets);
    //     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    // })

    const button = document.getElementById("formSubmit");
    
    button.addEventListener("click", function(e) {
        e.preventDefault()
        formSubmission(
            document,
            document.getElementById("faultyItems"),
            document.querySelector("input[name=pilotName]"),
            document.querySelector("input[name=copilotName]"),
            document.querySelector("input[name=fuelLevel]"),
            document.querySelector("input[name=cargoMass]"),
        )
    });
 });


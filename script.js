window.addEventListener("load", function () {
   // console.log("window loaded");
   let form = this.document.querySelector("form");
   let letters = /^[A-Za-z]+$/;
   const pilotName = document.querySelector("input[name=pilotName]");
   const copilotName = document.querySelector("input[name=copilotName]");
   const cargoMass = document.querySelector("input[name=cargoMass]");
   const fuelLevel = document.querySelector("input[name=fuelLevel]");
   // const div = document.getElementById("launchStatusCheck");
   const launchStatus = document.getElementById("launchStatus");
   const items = document.getElementById("faultyItems");
   const pilotStatus = document.getElementById("pilotStatus");
   const copilotStatus = document.getElementById("copilotStatus");
   const fuelStatus = document.getElementById("fuelStatus");
   const cargoStatus = document.getElementById("cargoStatus");
   let readyForLaunch = false;


   form.addEventListener("submit", function (event) {
      event.preventDefault();
      items.style.visibility = "hidden";
      readyForLaunch = true;
      launchStatus.innerHTML = "Awaiting Information Before Launch";
      launchStatus.style.color = "black";

      //Validating all the input 

      if (pilotName.value === "" || copilotName.value === "" || cargoMass.value === "" || fuelLevel.value === "") {
         alert("All fields are required!");
         readyForLaunch = false;
      }

      // validating the input type for cargomass,fuellevel and text input

      else if (isNaN(cargoMass.value) == true || isNaN(fuelLevel.value) == true) {
         alert("Make sure to enter valid information for each field!");
         readyForLaunch = false;
      }

      else if (!pilotName.value.match(letters) || !copilotName.value.match(letters)) {
         alert("Make sure to enter valid information for each field!");
         readyForLaunch = false;
      }

      //updating faultyitems,fuelstatus,cargostatus

      else {
         if (fuelLevel.value < 10000) {     // UPDATING FUEL STATUS
            items.style.visibility = "visible";
            pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
            copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch.`;
            fuelStatus.innerHTML = `There is no enough fuel for the journey.`;
            launchStatus.innerHTML = `The shuttle not ready for launch.`;
            launchStatus.style.color = "red";
            readyForLaunch = false;
         } else {
            fuelStatus.innerHTML = `Fuel level high enough for launch.`;
         }

         if (cargoMass.value > 10000) {    // UPDATING CARGO STATUS
            items.style.visibility = "visible";
            pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
            copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch.`;
            cargoStatus.innerHTML = `There is too much mass for the shuttle to take-off.`;
            launchStatus.innerHTML = `The shuttle not ready for launch.`;
            launchStatus.style.color = "red";
            readyForLaunch = false;
         } else {
            cargoStatus.innerHTML = `Cargo mass low enough for launch.`;
         }

         if (readyForLaunch) {
            // IF THE SHUTTLE IS GOOD TO GO 
            items.style.visibility = "visible";
            launchStatus.innerHTML = `The shuttle is ready for launch`;
            pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
            copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch.`;
            launchStatus.style.color = "green";
         }
      }

   });
});
// FETCHING PLANETARY JSON AND BONUS MISSION
fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
   response.json().then(function (json) {
      // console.log(json);
      let randomValue = json[parseInt(Math.random() * json.length)];
      // console.log(randomValue);
      let mission = document.getElementById("missionTarget");

      //UPDATING THE HTML DYNAMICALLY
      mission.innerHTML = `
                     <h2>Mission Destination</h2>
                     <ol>
            <li>Name: ${randomValue.name}</li>
            <li>Diameter: ${randomValue.diameter}</li>
            <li>Star: ${randomValue.star}</li>
            <li>Distance from Earth: ${randomValue.distance}</li>
            <li>Number of Moons: ${randomValue.moons}</li>
                  </ol>
            <img src="${randomValue.image}"> 
         `;
   });
});
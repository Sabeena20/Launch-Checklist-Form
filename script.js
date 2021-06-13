// Write your JavaScript code here!
window.addEventListener("load", function () {
   console.log("window loaded");
   let form = this.document.querySelector("form");
   let letters = /^[A-Za-z]+$/;
   form.addEventListener("submit", function (event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let items = document.getElementById("faultyItems");
      let launchStatus = document.getElementById("launchStatus");

      //Validating all the input 
      if (pilotName.value === "" || copilotName.value === "" || cargoMass.value === "" || fuelLevel.value === "") {
         alert("All fields are required!");
      }
      // validating the input type for cargomass and fuellevel
      if (isNaN(cargoMass.value) == true || isNaN(fuelLevel.value) == true) {
         alert("Make sure to enter valid information for each field!");
      }
      // validating the text input
      if (pilotName.value.match(letters) || copilotName.value.match(letters)) {
         return true;
      } else {
         alert("Make sure to enter valid information for each field!")
      }
      //updating the faulty items
      items.innerHTML = `
     <ul>
     <li> Pilot ${pilotName.value} is ready for launch. </li>
     <li> Co-pilot ${copilotName.value} is ready for launch</li>
     `;

      if (fuelLevel < 10000 || cargoMass > 10000) {
         console.log("ajsjkj");
         items.style.visibility = "visible";
         launchStatus.style.backgroundColor = "red";
         launchStatus.innerHTML = "The shuttle not ready for launch";
      }
      event.preventDefault();
   });
});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

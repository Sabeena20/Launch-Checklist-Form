// Write your JavaScript code here!
window.addEventListener("load", function () {
   console.log("window loaded");
   let form = this.document.querySelector("form");
   let letters = /^[A-Za-z]+$/;
   const pilotName = document.querySelector("input[name=pilotName]");
      const copilotName = document.querySelector("input[name=copilotName]");
      const cargoMass = document.querySelector("input[name=cargoMass]");
      const fuelLevel = document.querySelector("input[name=fuelLevel]");
      const div = document.getElementById("launchStatusCheck");
      const launchStatus = document.getElementById("launchStatus");
      const items = document.getElementById("faultyItems");
      const fuelStatus = document.getElementById("fuelStatus");
      const cargoStatus = document.getElementById("cargoStatus");
   form.addEventListener("submit", function (event) {
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
      event.preventDefault();
   });
      //updating the faulty items
      div.innerHTML = `
      
     <ul>
     <li> Pilot ${pilotName.value} is ready for launch. </li>
     <li> Co-pilot ${copilotName.value} is ready for launch</li>
     
     `;
     // updating fuelstatus and cargostatus
      if (fuelLevel < 10000 || cargoMass > 10000) {
         items.style.visibility = "visible";
         fuelStatus.innerHTML = "There is no enough fuel for the journey";
         cargoStatus.innerHTML = "There is too much mass for the shuttle to take-off";
         launchStatus.innerHTML = "The shuttle not ready for launch";
         launchStatus.style.backgroundColor = "red";
      } else {
         launchStatus.innerHTML = "The shuttle is ready for launch";
         launchStatus.style.backgroundColor = "green";
      }
   });
      // planetary json
      fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
         response.json().then(function (json) {
            console.log(json);
            let mission = document.getElementById("missionTarget");
            mission.innerHTML = `
            
  <h2>Mission Destination</h2>
  
  <ol>
   <li>Name: ${json[3].name}</li>
   <li>Diameter: ${json[3].diameter}</li>
   <li>Star: ${json[3].star}</li>
   <li>Distance from Earth: ${json[3].distance}</li>
   <li>Number of Moons: ${json[3].moons}</li>
</ol>
<img src="${json[3].image}"> 

`;
 });
      });
  
   



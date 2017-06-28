let latitude = 42.35
let longitude = -71.07


fetch('http://localhost:4567/api/v1/forecast/42.35,-71.07')

.then(response => {
    if (response.ok) {
      return response;
    } else {
      let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
      throw(error);
    }
  })
  .then(response => response.json())
  .then(body => {
    console.log(body);
    var start = document.getElementById("main");
    start.innerHTML = "The current weather conditions for " + body.timezone + " are <br/><br/>  Latitude " +
                      body.latitude + " <br/>Longitude " + body.longitude;
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));

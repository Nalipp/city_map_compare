var axios = require('axios');
var MAPQUEST_API_KEY = require('../../.env').MAPQUEST_API_KEY;

function getCoords(cityName) {
  return axios.get(
    'https://www.mapquestapi.com/geocoding/v1/address?key=' + MAPQUEST_API_KEY + '=' + cityName)
    .then(function(data) {
      return {
        coords : data.data.results[0].locations[0].latLng,
        location : data.data.results[0].providedLocation.location,
      }
    });
}

module.exports = getCoords; 


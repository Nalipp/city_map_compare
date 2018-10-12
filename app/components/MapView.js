var React = require('react');
var Map = require('google-maps-react').Map;
var InfoWindow = require('google-maps-react').InfoWindow;
var GoogleApiWrapper = require('google-maps-react').GoogleApiWrapper;
var PropTypes = require('prop-types');
var GOOGLE_API_KEY = require('../../.env').GOOGLE_API_KEY;

var mapContainerStyle = {
  width: '25em',
  height: '25em',
}

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlace : {
        name: props.cityName,
        lat: props.coords[0],
        lng: props.coords[1],
      },
    }
  }
  render() {
    return (
      <div style={mapContainerStyle}>
        <Map style={mapContainerStyle} google={this.props.google} 
          zoom={this.props.zoom} 
          draggableCursor={'default'}
          initialCenter={{lat: this.state.selectedPlace.lat, lng: this.state.selectedPlace.lng}}
          gestureHandling={'none'}
          disableDefaultUI={true}>
        </Map>
      </div>
    );
  }
}

module.exports = GoogleApiWrapper({
  apiKey: (GOOGLE_API_KEY)
})(MapContainer)


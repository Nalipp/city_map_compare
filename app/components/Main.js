var React = require('react');
var CityForm = require('./CityForm');

var h1Style = {
  display: 'flex',
  justifyContent: 'center',
  padding: '1.5em 0 0 0',
  letterSpacing: '.1em',
}

var h2Style = {
  display: 'flex',
  justifyContent: 'center',
}

var containerStyle = {
  marginBottom: '6em',
}

function Heading() {
  return (
    <div style={containerStyle}>
      <h1 style={h1Style}>Compare city sizes</h1>
      <h3 style={h2Style}>View maps at the same zoom level</h3>
    </div>
  )
}

class Main extends React.Component {
  render() {
    return (
      <div>
        <Heading />
        <CityForm />
      </div>
    )
  }
}

module.exports = Main;



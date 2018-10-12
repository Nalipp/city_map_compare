var React = require('react');
var PropTypes = require('prop-types');
var MapView = require('./MapView');

var spaceAroundRow = {
  display: 'flex',
  justifyContent: 'space-around',
  zIndex: '10',
}

var inputStyle = {
  width: '14em',
  fontSize: '1.4em',
  padding: '.2em',
  letterSpacing: '.06em',
  borderRadius: '.3em',
  border: '2px solid lightgrey',
}

var buttonStyle = {
  display: 'block',
  margin: '1em auto',
  width: '7em',
  borderRadius: '.3em',
  fontSize: '1.4em',
  cursor: 'pointer',
  border: '1px solid lightgrey',
}

function ResetCity(props) {
  return (
    <h4 style={{color: 'red', cursor: 'pointer'}} 
      onClick={props.onReset.bind(this, props.cityId)}>reset</h4>
  )
}

ResetCity.propTypes = {
  onReset: PropTypes.func.isRequired,
  cityId: PropTypes.string.isRequired,
}

class FormView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value : '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({value: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.props.cityId, this.state.value);
    this.setState({value: ''});
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          style={inputStyle}
          type={'text'} 
          onChange={this.handleChange}
          value={this.state.value} />
        <button
          style={buttonStyle}
          disabled={!this.state.value}
          type={'submit'}>
          Submit
        </button>
      </form>
    )
  }
}

FormView.propTypes = {
  city: PropTypes.string.isRequired,
  cityId: PropTypes.string.isRequired,
  coords: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

class CityForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city1 : '',
      city2 : '',
      coords1 : [],
      coords2 : [],
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleSubmit(cityId, cityName) {
    if (cityId === 'city1') {
      this.setState({city1: cityName, coords1: [-27.643387, 151.612224]})
    } else {
      this.setState({city2: cityName, coords2: [24.643387, 121.612224]})
    }
  }
  handleReset(cityId) {
    if (cityId === 'city1') {
      this.setState({city1: '', coords1: []})
    } else {
      this.setState({city2: '', coords2: []})
    }
  }
  render() {
    return (
      <div>
        <div style={spaceAroundRow}>
          <FormView 
            handleSubmit={this.handleSubmit}
            cityId={'city1'}
            city={this.state.city1} 
            coords={this.state.coords1}/>

          <FormView 
            handleSubmit={this.handleSubmit}
            cityId={'city2'}
            city={this.state.city2} 
            coords={this.state.coords2}/>
        </div>

        <div style={spaceAroundRow}>
          {this.state.city1 && 
            <ResetCity onReset={this.handleReset} cityId={'city1'}/>}

          {this.state.city2 && 
            <ResetCity onReset={this.handleReset} cityId={'city2'} />}
        </div>

        <div style={spaceAroundRow}>
          {this.state.city1 && 
            <MapView city={this.state.city1} coords={this.state.coords1} />}
          {this.state.city2 && 
            <MapView city={this.state.city2} coords={this.state.coords2} />}
        </div>
      </div>
    )
  }
}

module.exports = CityForm;

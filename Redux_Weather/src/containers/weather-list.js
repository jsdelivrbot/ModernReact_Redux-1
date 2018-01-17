import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map'

class WeatherList extends Component {
  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure)
    const humidites = cityData.list.map(weather => weather.main.humidity)
    const { lon, lat } = cityData.city.coord;
    

    return (
      //remember, when making a list each item needs a unique key
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" units="K" /></td>
        <td><Chart data={pressures} color="red" units="hPa"/></td>
        <td><Chart data={humidites} color="black" units="%"/></td>
      </tr>
    )
  }
/********Instead of doing a c&p of the <td> sparklines elements, we should make a new reusable component. This is usually true if you're repeating a lot of the same element *********/




  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }){
  //Again, es6 stuff. passing { weather } defines a variable 'weather' that is exactly that same as
  //const weather = state.weather
  //then instead of returning { weather: weather } es6 allows use to just use the following when variable and key names are the same
  return { weather }
}
//we'll now have access to this.props.weather inside of weather list. thanks redux!
export default connect(mapStateToProps)(WeatherList);
import React, { Component } from 'react';

//google maps api is linked in the index.html

class GoogleMap extends Component {
  //lifecycle method called directly after a compnent has finished rendering to the screen
  //3rd party libraries not made for react are often handled this way
  componentDidMount() {
    //google maps takes a reference to an existing element, and options for map rendering
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat, 
        lng: this.props.lon
      }
    });
  }
  
  render() {
    return <div ref="map" />
  }
}

export default GoogleMap;
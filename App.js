import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, StatusBar, AppState } from 'react-native';
import ListScreen from './components/screens/list/ListScreen';
import MapScreen from './components/screens/map/MapScreen';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leds: props.leds
    }
  }

  render() {
    //var comp = <MapScreen leds={this.state.leds} handleLed={this.changeLedState}/>
    var comp = <ListScreen leds={this.state.leds} handleLed={this.changeLedState}/>
    return (comp)
  }

  changeLedState = (led) => {
    console.log('Led ' + JSON.stringify(led));
    // Treat led array as immutable object, so make a copy of the array.
    // (Important if working with redux for example)
    let tmpLeds = this.state.leds.slice();
    var tmpLed = tmpLeds.find(l =>
      l.id === led.id
    );
    tmpLed.status = led.status;
    this.setState({
      leds: tmpLeds
    })
  }

}

App.defaultProps = {
  leds: [
    { "id": 0, "status": false },
    { "id": 1, "status": false },
    { "id": 2, "status": false },
    { "id": 3, "status": false },
    { "id": 4, "status": false }
  ]
}
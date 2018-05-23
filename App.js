import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, StatusBar, AppState } from 'react-native';
import ListScreen from './components/screens/list/ListScreen';
import MapScreen from './components/screens/map/MapScreen';
import { createMaterialTopTabNavigator } from 'react-navigation';

const MainNavigation = createMaterialTopTabNavigator(
    {
        List: { screen: ListScreen },
        Map: { screen: MapScreen },
    },
    {
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: 'darkgrey',
            labelStyle: {
                fontSize: 14,
                fontWeight: 'bold'
            },
            style: {
                backgroundColor: 'grey',
                paddingTop: StatusBar.currentHeight
            },
        },
        lazy: false
    }
);

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leds: props.leds,
            isLoadingFromServer: false,
            message: ' '
        }
    }

    componentDidMount() {
        this.loadFromServer();
    }

    render() {
        // var comp = <MapScreen leds={this.state.leds} handleLed={this.changeLedState}/>
        //var comp = <ListScreen leds={this.state.leds} handleLed={this.changeLedState}/>
        var comp = <MainNavigation screenProps={{
            leds: this.state.leds,
            handleLed: this.changeLedState,
            message: this.state.message
        }} />
        return (comp)
    }

    changeLedState = (led) => {
        console.log('Updating LED ...');
        this.setState({
            message: 'Updating...'
        })
        let url = webserviceUrl + led.id;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                status: led.status,
            })
        }).then(() => {
            let tmpLeds = this.state.leds.slice();
            var tmpLed = tmpLeds.find(l =>
                l.id === led.id
            );
            tmpLed.status = led.status;
            this.setState({
                leds: tmpLeds,
                message: ' '
            })
            console.log('Updated LED ' + led.id);
        })
    }

    loadFromServer = () => {
        console.log('Loading from server...');
        this.setState({
            isLoadingFromServer: true,
        })
        fetch(webserviceUrl).then(response => {
            if (!response.ok) {
                throw Error('network unreachable')
            }
            return response.json()
        }).then(res => {
            this.setState({
                leds: res,
                isLoadingFromServer: false
            })
            console.log('Received #LEDs from server: ' + this.state.leds.length);
        }).catch(err =>
            this.setState({
                error: true,
                isLoadingFromServer: false
            })
        )
    }

}

const host = 'http://86.119.32.225:8000/ledregistry';
const webserviceUrl = host + '/leds/';

App.defaultProps = {
    leds: [
        { "id": 0, "status": false },
        { "id": 1, "status": false },
        { "id": 2, "status": false },
        { "id": 3, "status": false },
        { "id": 4, "status": false }
    ]
}
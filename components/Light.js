import React from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';

export default class Light extends React.Component {
    render() {
        let img = require('./light_off.png');
        if (this.props.isOn) {
            img = require('./light_on.png');
        }
        return (
            <TouchableWithoutFeedback onPress={this.props.onPress}>
                <Image source={img}/>
            </TouchableWithoutFeedback>
        )
    }
}
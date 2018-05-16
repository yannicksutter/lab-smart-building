import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Led, LedPlaceHolder } from './Led';

class ListScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Led led={this.props.leds[0]} handleLed={this.props.handleLed} text='Zimmer I' />
                <Led led={this.props.leds[1]} handleLed={this.props.handleLed} text='Wohnen' />
                <Led led={this.props.leds[2]} handleLed={this.props.handleLed} text='Zimmer II' />
                <Led led={this.props.leds[3]} handleLed={this.props.handleLed} text='Zimmer III' />
                <Led led={this.props.leds[4]} handleLed={this.props.handleLed} text='Diele' />
                <LedPlaceHolder />
            </View>
        )
    }
}

export default ListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'lightgrey',
        justifyContent: 'center'
    }
});
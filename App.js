import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Hello from './components/Hello';
import Light from './components/Light';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.names = ['Balin', 'Dwalin', 'Fili', 'Kili', 'Dori', 'Nori', 'Ori', 'Oin', 'Gloin'];
    this.state = { index: 0, isOn: false };
    setInterval(this.tick, 1000);
  }

  tick = () => {
    this.setState({ index: (this.state.index + 1) % this.names.length });
  }

  render() {
    let message = "Hello to " + this.names[this.state.index];
    return (
      <View style={styles.container}>
        <Hello message={message} />
        <Light onPress={this.onPress} isOn={this.state.isOn} />
      </View>
    );
  }

  onPress = () => {
    let on = !this.state.isOn;
    this.setState({ isOn: on })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center',
  }
});


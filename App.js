import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Hello from './components/Hello';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.names = ['Balin', 'Dwalin', 'Fili', 'Kili', 'Dori', 'Nori', 'Ori', 'Oin', 'Gloin' ];
    this.state = { index: 0 };
    setInterval(this.tick, 1000);
  }
  tick = () => {
    this.setState({index: (this.state.index + 1) % this.names.length});
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text><Hello/> {this.names[this.state.index]}</Text>
      </View>
    );
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1, alignItems: 'center', justifyContent: 'center',
    },
});

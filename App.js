import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AnimatedComponent from './components/AnimatedComponent';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AnimatedComponent></AnimatedComponent>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import { Animated, Easing } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default class AnimatedComponent extends React.Component {

  spinValue = new Animated.Value(0);

  spin() {
    this.spinValue.setValue(0);
    Animated.timing(
      this.spinValue, {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear,
      }
    ).start(() => { this.spin() })
  }

  componentDidMount() {
    this.spin();
  }

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })

    return(
      <Animated.Image
        style={{
          width: 240,
          height: 230,
          transform: [{rotate: spin}] }}
          source={{uri: 'http://clipart-library.com/img/957932.png'
        }}
      />
    );
  }
}

{/* <FontAwesome name="star" size={128} color="orange" style={{
  transform: [{
    rotate: spin
  }]
}}/> */}

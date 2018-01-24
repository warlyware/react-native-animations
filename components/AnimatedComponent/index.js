import React from 'react';
import { Animated } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default class AnimatedComponent extends React.Component {

  render() {
    return(
      <FontAwesome name="star" size={128} color="orange" />
    );
  }
}

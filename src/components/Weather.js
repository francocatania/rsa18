import React, { Component } from 'react';
import { Text } from 'react-native';
import Card from './Card';

class Weather extends Component {
  render() {
    return (
      <Card style={{ height: 100, width: '100%', marginTop: 10 }}>
        <Text>Moscow, 14 grados Celsios xD</Text>
        <Text>To be continued..</Text>
      </Card>
    );
  }
}

export default Weather;

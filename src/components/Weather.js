import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Weather extends Component {
  render() {
    return (
      <View style={[styles.container, { height: 100, width: '100%' }]}>
        <Text>Moscow, 14 grados Celsios xD</Text>
        <Text>To be continued..</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginTop: 10
  }
});

export default Weather;

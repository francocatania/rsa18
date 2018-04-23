import React, { Component } from 'react';
import { View, Text, Button, AsyncStorage } from 'react-native';

class MoreScreen extends Component {
  static navigationOptions = {
    title: 'Más',
  };

  render() {
    return (
      <View>
        <Text>This is the More Screen Lord Zucc</Text>
        <Button
          onPress={() => AsyncStorage.removeItem('loginCode')}
          title="Logout"
        />
      </View>
    );
  }
}

export default MoreScreen;

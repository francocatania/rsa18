import React, { Component } from 'react';
import { View, Text, Button, AsyncStorage, Image } from 'react-native';
import Card from '../Card';

class MoreScreen extends Component {
  render() {
    return (
      <View style={{ padding: 10 }}>
        <Card style={{ padding: 10 }}>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
            <Image source={{ uri: 'https://seeklogo.com/images/W/whatsapp-logo-33F6A82887-seeklogo.com.png' }} style={{ height: 30, width: 30, resizeMode: 'cover', marginRight: 10 }} />
            <View>
              <Text style={{ fontSize: 15, color: '#212121' }}>Unite al grupo de WhatsApp</Text>
              <Text style={{ fontSize: 14, color: '#757575' }}>Compartí todo el viaje con tu grupo</Text>
            </View>
          </View>
        </Card>
        <Button
          onPress={() => AsyncStorage.removeItem('loginCode')}
          title="Logout"
        />
      </View>
    );
  }
}

export default MoreScreen;

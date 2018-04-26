import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, AsyncStorage, Image, Platform } from 'react-native';
import Card from '../Card';

class MoreScreen extends Component {
  render() {
    const buttonColor = Platform.OS === 'ios' ? '#3F51B5' : '#FF5252';
    const whatsappLogo = { uri: 'https://seeklogo.com/images/W/whatsapp-logo-33F6A82887-seeklogo.com.png' };
    const emergencyLogo = { uri: 'https://cdn0.iconfinder.com/data/icons/education-collection-2/32/emergency_cross_contacts_circle_online-512.png' };
    const infoLogo = { uri: 'https://cdn4.iconfinder.com/data/icons/defaulticon/icons/png/256x256/info.png' };
    
    return (
      <View style={{ padding: 10 }}>
        <Card>
          <View style={styles.rowContent}>
            <Image source={whatsappLogo} style={styles.icon} />
            <View>
              <Text style={styles.contentTitle}>Unite al grupo de WhatsApp</Text>
              <Text style={styles.contentSubtitle}>Compartí todo el viaje con tu grupo</Text>
            </View>
          </View>
          <View style={styles.separator} />
          <View style={styles.rowContent}>
            <Image source={emergencyLogo} style={styles.icon} />
            <View>
              <Text style={styles.contentTitle}>Contacto de Emergencia</Text>
              <Text style={styles.contentSubtitle}>Llamada directa a tu Asistencia al Viajero</Text>
            </View>
          </View>
        </Card>

        <Card style={{ marginTop: 10 }}>
          <View style={styles.rowContent}>
            <Image source={infoLogo} style={styles.icon} />
            <View>
              <Text style={styles.contentTitle}>Asistencia Médica</Text>
              <Text style={styles.contentSubtitle}>Toda la información acerca de tu cobertura</Text>
            </View>
          </View>
          <View style={styles.rowContent}>
            <Image source={infoLogo} style={styles.icon} />
            <View>
              <Text style={styles.contentTitle}>Contacto de Emergencia</Text>
              <Text style={styles.contentSubtitle}>Llamada directa a tu Asistencia al Viajero</Text>
            </View>
          </View>
          <View style={styles.rowContent}>
            <Image source={infoLogo} style={styles.icon} />
            <View>
              <Text style={styles.contentTitle}>Contacto de Emergencia</Text>
              <Text style={styles.contentSubtitle}>Llamada directa a tu Asistencia al Viajero</Text>
            </View>
          </View>
        </Card>

        <View style={{ marginTop: Platform.OS === 'ios' ? 20 : 15 }}>
        <Button
          onPress={() => AsyncStorage.removeItem('loginCode')}
          title="Logout"
          color={buttonColor}
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rowContent: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'flex-start',
    padding: 10
  },
  icon: {
    height: 30,
    width: 30, 
    resizeMode: 'cover', 
    marginRight: 20
  },
  contentTitle: { 
    fontSize: 15, 
    color: '#212121'
  },
  contentSubtitle: {
    fontSize: 14, 
    color: '#757575' 
  },
  separator: { 
    height: 1,
    width: '95%', 
    backgroundColor: '#BDBDBD', 
    alignSelf: 'center' 
  }
});

export default MoreScreen;

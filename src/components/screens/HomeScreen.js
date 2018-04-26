import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Weather from '../Weather';

class HomeScreen extends Component {
  render() {
    const patagonikLogoURL = 'https://firebasestorage.googleapis.com/v0/b/autho-c54b4.appspot.com/o/patagonik_logo.png?alt=media&token=70c96e9f-2835-49a2-9c62-c3443f502e70';
    const masterLogoURL = 'http://adsynergy.co.uk/wp-content/uploads/2017/06/mastercard-logo1.png';

    return (
      <View style={styles.pageContainer}>
        <View style={styles.logosContainer}>
          <Image 
            source={{ uri: patagonikLogoURL }}
            style={[styles.logoImage, { resizeMode: 'cover' }]}
          />
          <Image
            source={{ uri: masterLogoURL }}
            style={[styles.logoImage, { resizeMode: 'contain' }]}
          />
        </View>
        <Text style={styles.title}>Weather</Text>
        <Weather />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    padding: 10
  },
  logosContainer: {
    flexDirection: 'row',
    height: 32,
    marginBottom: 6,
    alignItems: 'center'
  },
  logoImage: {
    height: '100%',
    flex: 1,
    marginLeft: 10,
    marginRight: 10
  },
  title: {
    color: '#3F51B5',
    marginTop: 6
  }
});

export default HomeScreen;

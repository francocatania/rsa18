import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, TextInput } from 'react-native';

class Login extends Component {

  render() {
    const fifaWorldCupLogoURL = 'http://pluspng.com/img-png/logo-fifa-world-cup-2018-png-ih0-redbubble-net-image-144004343-2754-sticker-375x360-u4-png-375.png';
    const russiaImage = 'https://s-i.huffpost.com/gen/1283653/images/o-RUSSIAN-HISTORY-facebook.jpg';
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.backdrop} 
          source={{ uri: russiaImage }}
        >
            <View style={styles.backdropView}>

              <View style={styles.content}>
                <View style={styles.welcome}>
                  <Text style={styles.headline}>Bienvenido</Text>
                  <Text style={styles.headline}>Welcome</Text>
                  <Text style={styles.headline}>желанный</Text>
                </View>
                <View style={styles.welcome}>
                  <TextInput 
                    style={styles.textInput} 
                    placeholder='Ingrese su código'
                    placeholderTextColor='white'
                  />
                </View>
              </View>

              <View style={styles.fifaLogoBox}>
                <Image 
                  source={{ uri: fifaWorldCupLogoURL }}
                  style={styles.fifaLogo}
                />
              </View>

            </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  backdrop: {
    width: '100%',
    height: '100%',
  },
  backdropView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    width: '80%',
    height: '70%',
    // marginTop: 100,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  welcome: {
    width: '80%',
    // marginTop: 100,
  },
  headline: {
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white'
  },
  textInput: {
    height: 40,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderBottomWidth: 2,
    borderStyle: 'solid',
    borderBottomColor: 'white',
    color: 'white'
  },
  fifaLogoBox: {
    width: '100%',
    height: '25%',
  },
  fifaLogo: {
    height: '100%',
    // width: '100%',
    resizeMode: 'center',
  },
});

export default Login;

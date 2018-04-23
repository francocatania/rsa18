import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Login from './Login';

class SplashScreen extends Component {
  constructor() {
    super();
    this.state = {
      showLogin: false,
      loginText: '',
      loginCodes: ['Adminadmin', 'Consolid123']
    };
  }

  componentDidMount() {
    setTimeout(() => {
      AsyncStorage.getItem('loginCode').then(response => {
        if (response) {
          this.resetNavigation('HomeRoutes');
        } else {
          this.setState({ showLogin: true });
        }
      });
    }, 1000);
  }

  onChangeLoginText(text) {
    this.setState({ loginText: text }, this.checkLoginText);
  }
  
  resetNavigation(targetRoute) {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: targetRoute }),
      ]
    });
    this.props.navigation.dispatch(resetAction);
  }
  
  async checkLoginText() {
    if (this.state.loginCodes.includes(this.state.loginText)) {
      try {
        await AsyncStorage.setItem('loginCode', this.state.loginText);
        this.props.navigation.navigate('HomeRoutes');
      } catch (error) {
        console.log('Error setting item in AsyncStorage');
      }
    }
  }

  render() {
    const russiaImage = 'https://s-i.huffpost.com/gen/1283653/images/o-RUSSIAN-HISTORY-facebook.jpg';
    return (
      <View>
        <ImageBackground
          style={styles.backdrop} 
          source={{ uri: russiaImage }}
        >
          <View style={styles.backdropView}>
            {this.state.showLogin && 
            <Login 
              onChange={this.onChangeLoginText.bind(this)}
              loginText={this.state.loginText} 
            />}
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backdrop: {
    width: '100%',
    height: '100%',
  },
  backdropView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});

export default SplashScreen;

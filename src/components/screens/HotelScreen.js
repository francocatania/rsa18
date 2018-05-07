import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, AsyncStorage, ActivityIndicator, Platform, NetInfo } from 'react-native';
import firebase from 'firebase';
import HotelCard from '../HotelCard';

class HotelScreen extends Component {
  constructor() {
    super();
    this.state = {
      hotels: null
    };
  }

  componentDidMount() {
    if (Platform.OS === 'ios') {
      fetch('https://www.google.com')
      .then(() => {
        this.getFromFirebase();
      })
      .catch(() => {
        this.getFromStorage();
      });
    } else { 
      NetInfo.isConnected.fetch().done(isConnected => {
        if (isConnected) {
          this.getFromFirebase();
        } else {
          this.getFromStorage();
        }
      });
    }
  }

  getFromFirebase() {
    AsyncStorage.getItem('loginCode')
      .then(response => {
        firebase.database().ref(`${response}/hotels`)
          .once('value', snapshot => {
              AsyncStorage.setItem('hotels', JSON.stringify(snapshot.val()));
              this.setState({ hotels: snapshot.val() });
            });
        });
  }

  getFromStorage() {
    AsyncStorage.getItem('hotels')
    .then(response => {
      this.setState({ hotels: JSON.parse(response) });
    });
  }

  renderSpinner() {
    return (
      <View style={styles.spinnerContainer}>
        <ActivityIndicator size="large" style={{ alignSelf: 'center' }} />
      </View>
    );
  }

  renderHotels() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.pageContainer}>
          {this.state.hotels.map((hotel, idx) => <HotelCard {...hotel} key={idx} />)}
        </View>
      </ScrollView>
    );
  }

  render() {
    return this.state.hotels ? this.renderHotels() : this.renderSpinner();
  }
}

const styles = StyleSheet.create({
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  pageContainer: {
    padding: 10,
  }
});

export default HotelScreen;

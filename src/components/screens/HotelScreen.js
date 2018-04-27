import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, AsyncStorage, ActivityIndicator } from 'react-native';
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
    AsyncStorage.getItem('loginCode').then(response => {
      firebase.database().ref(`${response}/hotels`)
        .once('value', snapshot => {
          this.setState({ hotels: snapshot.val() });
        });
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

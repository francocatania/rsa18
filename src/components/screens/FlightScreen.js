import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, ActivityIndicator, AsyncStorage } from 'react-native';
import firebase from 'firebase';
import FlightCard from '../FlightCard';

class FlightScreen extends Component {
  constructor() {
    super();
    this.state = {
      flights: null
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('loginCode').then(response => {
      firebase.database().ref(`${response}/flights`)
        .once('value', snapshot => {
          this.setState({ flights: snapshot.val() });
        });
    });
  }

  render() {
    return this.state.flights ?
      (
      <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#F8F8F8' }}>
        <View style={styles.pageContainer}>
          {this.state.flights.map((flight, idx) => <FlightCard {...flight} key={idx} />)}
        </View>
      </ScrollView>
      ) :
      (
        <View style={styles.spinnerContainer}>
          <ActivityIndicator size="large" style={{ alignSelf: 'center' }} />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  pageContainer: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    padding: 10
  }
});

export default FlightScreen;

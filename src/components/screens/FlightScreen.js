import React from 'react';
import { View, StyleSheet } from 'react-native';
import FlightCard from '../FlightCard';

const FlightScreen = () => (
    <View style={styles.pageContainer}>
      <FlightCard />
      <FlightCard />
    </View>
);

const styles = StyleSheet.create({
  pageContainer: {
    padding: 10
  }
});

export default FlightScreen;

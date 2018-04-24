import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import FlightCard from '../FlightCard';

const FlightScreen = () => (
    <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#F8F8F8' }}>
      <View style={styles.pageContainer}>
        <FlightCard />
        <FlightCard />
      </View>
    </ScrollView>
);

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    padding: 10
  }
});

export default FlightScreen;

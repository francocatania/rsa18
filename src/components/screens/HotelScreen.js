import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import HotelCard from '../HotelCard';

const HotelScreen = () => (
    <ScrollView>
      <View style={styles.pageContainer}>
        <HotelCard />
        <HotelCard />
      </View>
    </ScrollView>
);

const styles = StyleSheet.create({
  pageContainer: {
    padding: 10,
  }
});

export default HotelScreen;

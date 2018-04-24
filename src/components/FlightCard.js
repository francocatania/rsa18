import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from './Card';
import FlightHeader from './FlightHeader';
import FlightColumn from './FlightColumn';

const FlightCard = () => {
  const demoDataForHeader = {
    origin: 'EZE',
    destination: 'CDG',
    airline: 'AirFrance',
    flightNumber: 'AF229'
  };
  
  return (
    <Card style={{ marginBottom: 20 }}>
      <FlightHeader {...demoDataForHeader} />
      <View style={styles.columnContainer}>
        <FlightColumn />
        <View style={styles.middleColumnContainer}>
          <Text style={styles.middleText}>12hs 40min</Text>
          <View style={styles.middleLine} />
        </View>
        <FlightColumn isLanding />
      </View>
      <View style={styles.footerContainer}>
        <View style={styles.textColumn}>
          <Text style={styles.footerField}>Avion</Text>
          <Text style={styles.footerValue}>Airbus A380</Text>
        </View>
        <View style={styles.textColumn}>
          <Text style={styles.footerField}>Cabina</Text>
          <Text style={styles.footerValue}>Economy</Text>
        </View>
        <View style={styles.textColumn}>
          <Text style={styles.footerField}>Operado por</Text>
          <Text style={styles.footerValue}>Air France</Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  columnContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    paddingLeft: 6,
    paddingRight: 6
  },
  middleColumnContainer: {
    alignSelf: 'center',
    marginLeft: 6,
    marginRight: 6,
    marginTop: 16
  },
  middleText: {
    color: 'blue',
    textAlign: 'center',
    fontSize: 10
  },
  middleLine: {
    backgroundColor: 'blue',
    height: 2,
    marginTop: 2
  },
  footerContainer: {
    backgroundColor: '#EFEFEF',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 50,
    marginTop: 8
  },
  footerField: {
    color: '#888888',
    fontSize: 12
  },
  footerValue: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold'
  }
});

export default FlightCard;

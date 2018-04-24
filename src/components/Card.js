import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = ({ children, style }) => (
  <View style={[styles.cardStyle, style]}>
    <View style={styles.innerStyle}>
      {children}
    </View>
  </View>
);

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: 'white',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 1
  },
  innerStyle: {
    overflow: 'hidden',
    width: '100%',
    borderRadius: 4
  }
});

export default Card;

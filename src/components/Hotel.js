import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const hotelUrl = 'https://gbsn.org/wp-content/uploads/2017/03/olympic-hotel.jpg';

const Hotel = ({ hotelName, hotelNameRussian, hotelImgs, address, addressRussian, hotelTelephone, hotelMail, hotelWebsite }) => {
  const { 
    cardContainer,
    hotelImage,
    hotelTitle,
    hotelSubtitle

  } = styles;
  
  return (
    <View style={cardContainer}>
      <Image source={{ uri: hotelUrl }} style={hotelImage} />
      <Text style={hotelTitle}>Azimut Moscow</Text>
      <Text style={hotelSubtitle}>Azefhsldkjf Mascaw</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'lightblue',
    // height: 100,
    width: '95%',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
    marginBottom: 15,
    overflow: 'hidden'
  },
  hotelImage: {
    height: 300,
    width: '100%',
    resizeMode: 'cover',
  },

  hotelTitle: {
    fontSize: 30,
    color: 'black'
  },

  hotelSubtitle: {
    fontSize: 18,
    color: 'grey'
  }
  
});

export default Hotel;

import React from 'react';
import { Dimensions, StyleSheet, View, Text, Image, ScrollView, Vibration } from 'react-native';

const hotelUrl = 'https://gbsn.org/wp-content/uploads/2017/03/olympic-hotel.jpg';
const hotelUrl2 = 'https://images.trvl-media.com/hotels/1000000/10000/7800/7736/7736_195_z.jpg';
const hotelUrl3 = 'https://t-ec.bstatic.com/images/hotel/max1024x768/328/32837688.jpg';

const { width } = Dimensions.get('window');
const Hotel = ({ 
  hotelName, 
  hotelNameRussian, 
  hotelImgs, 
  address, 
  addressRussian, 
  hotelTelephone, 
  hotelMail, 
  hotelWebsite 
}) => {
  const { 
    screen,
    cardContainer,
    hotelImage,
    hotelTitle,
    hotelSubtitle,
    carousel,
    imgContainer

  } = styles;
  
  return (
    <View style={screen}>
      <View style={cardContainer}>
        <ScrollView horizontal style={carousel} pagingEnabled showsHorizontalScrollIndicator={false}>
          <Image source={{ uri: hotelUrl }} style={hotelImage} />
          <Image source={{ uri: hotelUrl2 }} style={hotelImage} />
          <Image source={{ uri: hotelUrl3 }} style={hotelImage} />
        </ScrollView>
        <Text style={hotelTitle}>Azimut Moscow</Text>
        <Text style={hotelSubtitle}>Azefhsldkjf Mascaw</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  cardContainer: {
    backgroundColor: '#F8F8F8',
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
  carousel: {
    height: 300,
    width: '100%',
    backgroundColor: 'red'
  },
  hotelImage: {
    width: width - 20,
    resizeMode: 'cover'
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

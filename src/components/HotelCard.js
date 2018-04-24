import React from 'react';
import call from 'react-native-phone-call';
import { Dimensions, StyleSheet, View, Text, Image, ScrollView, Linking, Button, Platform, TouchableOpacity } from 'react-native';
import Card from './Card';

const hotelUrl = 'https://gbsn.org/wp-content/uploads/2017/03/olympic-hotel.jpg';
const hotelUrl2 = 'https://images.trvl-media.com/hotels/1000000/10000/7800/7736/7736_195_z.jpg';
const hotelUrl3 = 'https://t-ec.bstatic.com/images/hotel/max1024x768/328/32837688.jpg';

const { width } = Dimensions.get('window');
const Hotel = (/*{ 
  hotelName, 
  hotelNameRussian, 
  hotelImgs, 
  address, 
  addressRussian, 
  hotelTelephone, 
  hotelMail, 
  hotelWebsite 
}*/) => {
  const { 
    cardContainer,
    hotelImage,
    hotelInfoContainer,
    hotelTitle,
    hotelSubtitle,
    carousel,
    buttonContainer
  } = styles;
  
  const hotelName = 'Azimut Olympic Moscow';
  const hotelPhoneNumber = {
    number: '1530981809',
    prompt: false
  };

  const phoneCall = () => {
    call(hotelPhoneNumber).catch(console.error);
  };
   
  const openInGoogleMaps = () => {
    Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${hotelName}`);
  };

  return (
    <Card style={cardContainer}>
      <ScrollView 
        horizontal
        style={carousel}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        <Image source={{ uri: hotelUrl }} style={hotelImage} />
        <Image source={{ uri: hotelUrl2 }} style={hotelImage} />
        <Image source={{ uri: hotelUrl3 }} style={hotelImage} />
      </ScrollView>
      <View style={hotelInfoContainer}>
        <Text style={hotelTitle}>{hotelName}</Text>
        <Text style={hotelSubtitle}>Azefhsldkjf Mascaw</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 20, height: 60 }}>
          <TouchableOpacity onPress={phoneCall}>
            <View style={{ width: 50, alignItems: 'center' }}>
              <Image
                style={styles.button}
                source={{ uri: 'http://www.emtmarketing.com/wp-content/uploads/2016/06/phone-call-icon-16.png' }}
              />
              <Text style={{ color: 'gray', fontSize: 12, marginTop: 5 }}>Call</Text>
            </View>
          </TouchableOpacity>
          <View style={{ width: 1, height: '100%', backgroundColor: 'lightgray' }} />
          <TouchableOpacity onPress={phoneCall}>
            <View style={{ width: 50, alignItems: 'center' }}>
              <Image
                style={styles.button}
                source={{ uri: 'http://www.emtmarketing.com/wp-content/uploads/2016/06/phone-call-icon-16.png' }}
              />
              <Text style={{ color: 'gray', fontSize: 12, marginTop: 5 }}>Call</Text>
            </View>
          </TouchableOpacity>
          <View style={{ width: 1, height: '100%', backgroundColor: 'lightgray' }} />
          <TouchableOpacity onPress={phoneCall}>
            <View style={{ width: 50, alignItems: 'center' }}>
              <Image
                style={styles.button}
                source={{ uri: 'http://www.emtmarketing.com/wp-content/uploads/2016/06/phone-call-icon-16.png' }}
              />
              <Text style={{ color: 'gray', fontSize: 12, marginTop: 5 }}>Call</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={buttonContainer}>
          <Button
            onPress={openInGoogleMaps}
            title="Open in Google Maps"
            color='#FF5252'
          />
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    alignSelf: 'center',
    // marginTop: 10,
    marginBottom: 20
  },
  carousel: {
    height: 300,
    width: '100%',
  },
  hotelImage: {
    width: width - 20,
    resizeMode: 'cover'
  },
  hotelInfoContainer: {
    padding: 10
  },
  hotelTitle: {
    fontSize: 26,
    color: 'black'
  },
  hotelSubtitle: {
    fontSize: 18,
    color: 'grey'
  },
  buttonContainer: {
    marginTop: 20,
    alignSelf: Platform.OS === 'ios' ? 'flex-start' : undefined,
    backgroundColor: 'lightblue',
  },
  button: {
    width: 30,
    height: 30
  }
});

export default Hotel;

import React from 'react';
import { View, StyleSheet, Text, Linking, Image, TouchableOpacity, TouchableWithoutFeedback, Dimensions } from 'react-native';
import Card from './Card';

const NewsCard = ({ title, url, urlToImage, description }) => {
  const articleImage = { uri: urlToImage };
  const articleTitle = title.slice(0, title.length - 14);
  const articleDescription = description.slice(12);
  const openArticle = () => {
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  };

  return (
    <Card style={styles.articleCard} >
      <View style={styles.articleHeader} >
        <TouchableWithoutFeedback onPress={openArticle}>
          <Image source={articleImage} style={styles.articlePhoto} />
        </TouchableWithoutFeedback>
        <TouchableOpacity onPress={openArticle}>
          <Text style={styles.articleTitle}>{articleTitle}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.articleSource}>{articleDescription}</Text>
    </Card>
  );
};

const { width } = Dimensions.get('window');
const photoSide = width * 0.24;
const textWidth = width * 0.60;

const styles = StyleSheet.create({
  articleCard: {
    padding: 10,
    marginTop: 10
  },
  articleHeader: {
    flexDirection: 'row', 
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  articlePhoto: {
    height: photoSide,
    width: photoSide, 
    resizeMode: 'cover', 
    marginRight: 10
  },
  articleTitle: {
    width: textWidth,
    fontSize: 16,
    color: '#212121',
  },
  articleSource: {
    fontSize: 14,
    color: '#757575'
  },
})

export default NewsCard;

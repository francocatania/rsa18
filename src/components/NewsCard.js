import React from 'react';
import { 
  View,
  StyleSheet, 
  Text, 
  Linking, 
  Image, 
  TouchableOpacity, 
  TouchableWithoutFeedback, 
  Dimensions 
} from 'react-native';
import Card from './Card';

const NewsCard = ({ title, link, imgUrl, description }) => {
  const articleImage = { uri: imgUrl };
  const openArticle = () => {
    Linking.openURL(link).catch(err => console.error('An error occurred', err));
  };

  return (
    <Card style={styles.articleCard} >
      <View style={styles.articleHeader} >
        <TouchableWithoutFeedback onPress={openArticle}>
          <Image source={articleImage} style={styles.articlePhoto} />
        </TouchableWithoutFeedback>
        <TouchableOpacity onPress={openArticle}>
          <Text style={styles.articleTitle}>{title}</Text>
        </TouchableOpacity>
      </View>
      {description && <Text style={styles.articleDescription}>{description}</Text>}
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
  articleDescription: {
    marginTop: 10,
    fontSize: 14,
    color: '#757575'
  },
});

export default NewsCard;

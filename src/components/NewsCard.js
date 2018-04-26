import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Card from './Card';

const NewsCard = ({ title, author }) => {
  return (
    <Card style={{ marginTop: 10 }}>
      <Text>{title}</Text>
      <Text>Fuente: {author}</Text>
    </Card>
  );
};

export default NewsCard;

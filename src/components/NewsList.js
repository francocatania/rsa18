import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Animated
} from 'react-native';
import apiResponse from '../../newsApiMock';
import NewsCard from './NewsCard';

class NewsList extends Component {
  constructor() {
    super();
    this.state = {
      news: []
    };
  }

  componentDidMount() {
    this.setState({
      news: apiResponse
    });
  }

  render() {
    return (
      this.state.news.length > 0 &&
        this.state.news.map((article, index) => (
          <NewsCard {...article} key={index} />
        ))
    )
  }
}

export default NewsList;


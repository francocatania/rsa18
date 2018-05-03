import React from 'react';
import NewsCard from './NewsCard';

const NewsList = ({ news }) => (
    news.length > 0 &&
      news.map((article, index) => (
        <NewsCard {...article} key={index} />
      ))
  );

export default NewsList;

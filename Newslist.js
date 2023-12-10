// NewsList.js
import React from 'react';
import Newsitem from './Newsitem';



const Newslist = ({ news }) => {
  // Filter out articles without a description
 
  
  const newsWithDescription = news.filter(article => article.description&&article.title !== '[Removed]'&&article.author !== null
  &&article.author.length <= 25);
 
  
  return (
    <div>
  {newsWithDescription.map((article, index) => [
    // News item
    <Newsitem key={article.title} article={article} 
    marginTop={index !== 0 ? 'mt-[80px]' : ''}
    />,
    
    // Divider (except for the last item)
   
  ])}
</div>
  );
};

export default Newslist;


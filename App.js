// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Newslist from './components/Newslist';
import Pagenation from './components/pagenation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
library.add(faSearch);


const App = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  // Declare searchResults state
  const apiKey = '99c9ad4cbdca4514b9a160d04ebccace';

  useEffect(() => {
    // Fetch news data from the API
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: 'apple',
            from: '2023-12-09',
            to:'2023-12-09',
            sortBy: 'popularity',
            apiKey: apiKey,
            page: currentPage,
            pageSize: perPage,
          },
        })

        // Check if articles exist before setting the state
        if (response.data.articles) {
          setNews(response.data.articles);
          // Set search results initially to all articles
        } else {
          console.warn('No articles found in the response.');
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    // Call the fetchNews function
    fetchNews();
  }, [currentPage, perPage]);

  // Function to update search results
 
  

  return (
    <>
    
      <h1 className='font-bold text-[50px] mb-[50px] ml-[550px]'>News Dashboard</h1>
      
        <Newslist news={news} />  {/* Use search results instead of the original 'news' state */}
        <FontAwesomeIcon icon={faSearch} className="ml-[318px] absolute top-[150px] border border-white p-[5px] bg-white h-[22px]" />
        
        <input
        className="mb-[100px] absolute top-[150px] px-2 py-1 ml-[350px] border border-gray-300 rounded"
        placeholder="Type to search..."
       
        
      />
      <br />
      <Pagenation currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
};

export default App;






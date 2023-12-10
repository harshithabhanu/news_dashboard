import React from 'react';
import './news.css';


const Newsitem = ({ article,marginTop}) => {
    


  return (
  <>
    <div className='relative flex flex-row items-center ml-[300px] w-[900px] gap-[100px] items-center  '>
    {/* Adjust width based on your design */}
    
    <div className='w-[492px] h-[200px] bg-purple-500 '></div>
  
    <div className='flex flex-col flex-grow w-[900px]  '>
 <p className='text-purple-800   w-[40%]  '><b className={`inline-block border bg-gray-300 rounded-md p-[10px] ${marginTop}`}>
    {article.author}</b></p>
    <p className='text-[13px] ml-[350px] mt-[-40px]'><b>Published At</b><br/>{article.publishedAt}</p>
      <h2 className='text-xl font-semibold mt-[20px]'>{article.title}</h2>
      
  <p className='text-gray-700 mt-2 text-justify'>{article.description}</p>


      <a
        href={article.url}
        target='_blank'
        rel='noopener noreferrer'
        className='text-blue-500 hover:underline mt-2 block '
      >
        Read More
      </a>
    </div>
  
 <div className='absolute w-[330px] h-full bg-purple-500 '></div>

 
 </div>
  </>



  );
};

export default Newsitem;

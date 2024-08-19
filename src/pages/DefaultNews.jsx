import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "../components/NewsCard";

const DefaultNews = () => {
  const [news, setNews] = useState([]);
  const apiURL = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=05ee6cc6cebb47518341b60d6dc3bbf8';
  //const apiKey = "364993d049084ce98c88c51585b1464e";
  //const url=apiURL+apiKey;
  useEffect(() => {
    const fetchDefaultNews = async() => {
      // try{
      //   const response=await fetch(apiURL+apiKey);
      //   const jsonData=await response.json();
      //   const actualNews=response.data.articles;
      //   setNews(actualNews);
      // }catch(err){
      //   err =>{
      //     console.log(err);
      //   }
      // }
      await axios
        .get(apiURL)
        .then((response) => {
            console.log(response.data);
            const actualNews = response.data.articles//.filter((item) => {
              //return item.urlToImage == null;
            //});
          setNews(actualNews);
          console.log(actualNews);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchDefaultNews();
  }, []);
  return (
    <>
      <div className="container">
        <h1>Highlited News of the Day</h1>
        {news && (
          <div className="newsContainer">
            {news &&
              news.map((item, index) => {
                return <NewsCard key={index} result={item} />;
              })}
          </div>
        )}
      </div>
    </>
  );
};

export default DefaultNews;

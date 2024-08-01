import React from "react";
import { useState } from "react";
import axios from "axios";
import NewsCard from "../components/NewsCard";

const SearchedNews = () => {
  const [userInput, setUserInput] = useState("");
  const [holdInput, setHoldInput] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [news, setNews] = useState([]);

  const enterHandler = (e) => {
    if (e.key === "Enter") {
      searchNews();
    } else {
      return;
    }
  };

  const searchNews = () => {
    if (userInput == "") {
      setErrorMsg("Please enter somthing...");
    } else {
      setErrorMsg("");
      const apiKey = "364993d049084ce98c88c51585b1464e";
      //Api call
      axios
        .get(
          "https://newsapi.org/v2/everything?q=" +
            userInput +
            "&apiKey=" +
            apiKey
        )
        .then((response) => {
          console.log(response.data.articles);
          setErrorMsg("");
          const actualResponse = response.data.articles.filter((item) => {
            return item.urlToImage != null;
          });
          setNews(actualResponse);
        })
        .catch((err) => {
          console.log(err);
          setErrorMsg("No results found");
        });
      setHoldInput(userInput);
      setUserInput("");
    }
  };

  return (
    <>
      <div className="container">
        <div className="searchBox">
          <h3>Search for Any News</h3>
          <input
            type="text"
            value={userInput}
            onKeyDown={enterHandler}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="search anything..."
          />
          <button
            style={{ color: "white", backgroundColor: "green" }}
            onClick={searchNews}
          >
            Search
          </button>
        </div>
        <p className="errorMsg">{errorMsg}</p>
        {news && <h4>Top result for {holdInput} ...</h4>}
        {console.log(news)}
        <div className="newsContainer">
          {news &&
            news.map((item, index) => {
              return <NewsCard key={index} result={item} />;
            })}
        </div>
      </div>
    </>
  );
};

export default SearchedNews;

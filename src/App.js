import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import QuoteBox from './Components/QuoteBox';

const App = () => {
  const [quote,setQuote] = useState('');
  const [author,setAuthor] = useState('');
  const [quotes,setQuotes] = useState([]);


useEffect(() => {
  const fetchQuotes = async () => {
    const response = await axios.get("https://type.fit/api/quotes");
    setQuotes(response.data);
    getRandomQuote(response.data);
  };
  fetchQuotes();
}, []);

const getRandomQuote = (quotesArray) => {
  const randomIndex = Math.floor(Math.random() * quotesArray.length);
  const randomQuote = quotesArray[randomIndex];

  // Clean the ouput based on what the API gave us
  let cleanAuthor = randomQuote.author;
  if (cleanAuthor.includes(", type.fit")) {
    cleanAuthor = cleanAuthor.split(", type.fit")[0];
    // This will separate the string in two and save only the beginning
  } else if (cleanAuthor === "type.fit") {
    cleanAuthor = "Anthony Hopkins"
  }
  setQuote(randomQuote.text);
  setAuthor(cleanAuthor);
};

const fetchNewQuote = () => {
  getRandomQuote(quotes);
}

const tweetQuote = `https://twitter.com/intent/tweet?text="${quote}" - ${author}`;

return (
  <div className='App'>

    <div className='center-container'><QuoteBox 
      quote={quote}
      author={author}
      fetchNewQuote={fetchNewQuote}
      tweetQuote={tweetQuote}
    /></div>
  </div>
);
};


export default App;

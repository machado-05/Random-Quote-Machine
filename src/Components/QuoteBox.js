import React from "react";

const QuoteBox = ({quote,author, fetchNewQuote, tweetQuote}) => {
    return (
        <div id="quote-box" className="quote-box">
            <p className="quote-text" id="text">"{quote}"</p>
            <p className="quote-author" id="author">- {author}</p>
            <button id="new-quote" className="new-quote-btn" onClick={fetchNewQuote}>New Quote</button>
            <a
            id="tweet-quote"
            href={tweetQuote}
            target="_blank"
            rel="noopener noreferrer"
            >
                Tweet
            </a>
        </div>
    );
};

export default QuoteBox;
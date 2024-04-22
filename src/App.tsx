import { useState } from "react";
import "./App.css";
import quotes from "./assets/quotes.json";
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

interface Quote {
  quote: string;
  author: string;
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());

  return (
    <>
      <div className="container">
        <div className="background"></div>
        <div id="quote-box">
          <div className="quote-content">
            <h2 id="text">
              <FaQuoteLeft size="30" />
              <span className="content">{quote.quote}</span>
              <FaQuoteRight size="30" />
            </h2>
            <h3 id="author">- {quote.author}</h3>
          </div>
          <div className="btn-box">
            <button className="btn" id="tweet">
              <a
                href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote} - ${quote.author}`}
                id="tweet-quote"
                target="_blank"
                rel="noreferrer">
                <FaTwitter size="30" />
              </a>
            </button>
            <button
              className="btn"
              id="new-quote"
              onClick={() => setQuote(getRandomQuote())}>
              New quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
import './App.css';
import { useState } from 'react';
const QUOTE = [
  {
    "quote": "The best of people are those who benefit others the most.",
    "author": "Prophet Muhammad (PBUH)"
  },
  {
    "quote": "Knowledge is a light that illuminates the path of life.",
    "author": "Imam Ali (RA)"
  },
  {
    "quote": "The greatest jihad is to conquer your own self.",
    "author": "Prophet Muhammad (PBUH)"
  },
  {
    "quote": "This world is a temporary abode, and the Hereafter is our eternal home.",
    "author": "Imam Ali (RA)"
  },
  {
    "quote": "True wealth is not measured in material possessions, but in the richness of one's character.",
    "author": "Imam al-Ghazali"
  },
  {
    "quote": "The most beloved deed to Allah is the one that is done consistently, even if it is small.",
    "author": "Prophet Muhammad (PBUH)"
  },
  {
    "quote": "Seek knowledge from the cradle to the grave.",
    "author": "Prophet Muhammad (PBUH)"
  },
  {
    "quote": "The ink of the scholar is more sacred than the blood of the martyr.",
    "author": "Imam Ali (RA)"
  },
  {
    "quote": "Fear Allah wherever you are, and follow up a bad deed with a good one to erase it.",
    "author": "Prophet Muhammad (PBUH)"
  },
  {
    "quote": "The strong believer is better and more beloved to Allah than the weak believer, though there is good in both of them.",
    "author": "Prophet Muhammad (PBUH)"
  },
  {
    "quote": "The best of speech is that which is true and concise.",
    "author": "Imam Ali (RA)"
  },
  {
    "quote": "Whoever believes in Allah and the Last Day, let him speak good or remain silent.",
    "author": "Prophet Muhammad (PBUH)"
  },
  {
    "quote": "The most excellent charity is that which is given when one is in need.",
    "author": "Prophet Muhammad (PBUH)"
  },
  {
    "quote": "The most beloved of deeds to Allah are those that are done regularly, even if they are small.",
    "author": "Prophet Muhammad (PBUH)"
  },
  {
    "quote": "The best of people are those who benefit others the most.",
    "author": "Prophet Muhammad (PBUH)"
  },
  {
    "quote": "This world is a temporary abode, and the Hereafter is our eternal home.",
    "author": "Imam Ali (RA)"
  },
  {
    "quote": "True wealth is not measured in material possessions, but in the richness of one's character.",
    "author": "Imam al-Ghazali"
  },
  {
    "quote": "The most beloved deed to Allah is the one that is done consistently, even if it is small.",
    "author": "Prophet Muhammad (PBUH)"
  },
  {
    "quote": "Seek knowledge from the cradle to the grave.",
    "author": "Prophet Muhammad (PBUH)"
  },
  {
    "quote": "The ink of the scholar is more sacred than the blood of the martyr.",
    "author": "Imam Ali (RA)"
  }
];
const App = () => {
  const randomHEX = (num) =>{
    const random = Math.floor(Math.random() * num); 
    return random;
  }
  const [HEX, setHex] = useState(randomHEX(15));
  const [author, setAuthor ] = useState(QUOTE[HEX].quote);
  const [quote, setQuote] = useState(QUOTE[HEX].author); 

  const styleOfDiv = {
    backgroundColor: "#"+randomHEX(1000000),
    width: "450px",
    height: "250px",
    padding: "25px",
    fontSize: "18px",
    fontFamily: "sans-serif",
    borderRadius: "12px",
  }


  const handleNewQuote = () => {
    setHex(randomHEX(15));
    setQuote(QUOTE[HEX].quote);
    setAuthor(QUOTE[HEX].author);
  }

  return(
    <div id="quote-box" style={styleOfDiv}>
      <p id="text">"{quote}</p>
      <p id="author">{author}</p>
      <div id="btns"> 
        <button id="new-quote" onClick={() => handleNewQuote()}>New Quote</button>
        <a href="https://twitter.com/intent/tweet?text=your_tweet_text" id="tweet-quote" target="_blank">twitter</a>
        <a id="facebook">facebook</a>
      </div>
    </div>
  )
}

export default App;

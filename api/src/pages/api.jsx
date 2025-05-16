import { useState } from "react";

const API = () => {
  const [quote, setQuote] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://star-wars-quotes-api-character-collection.p.rapidapi.com/quote",
        {
          headers: {
            "x-rapidapi-host":
              "star-wars-quotes-api-character-collection.p.rapidapi.com/quote",
            "x-rapidapi-key":
              "b914e90786mshba3191d8b405c6bp167744jsn911e982b48f3",
          },
        }
      );
      const data = await response.json();
      setQuote(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const generateQuote = () => {
    fetchData();
  };

  return (
    <div>
      <h1>Star Wars Quotes</h1>
      <button onClick={generateQuote}>Generate Quote</button>
      <div>Which character said this quote? {quote ? quote.quote : ""}</div>
      <div>
        <p className="font-lg">Han Solo</p>
      </div>
    </div>
  );
};

export default API;

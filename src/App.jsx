import React, { useState } from "react";
import axios from "axios";
import Footer from "./Footer";

const App = () => {
  const [suggestion, setSuggestion] = useState(null);
  const [fact, setFact] = useState(null);

  const getSugesstion = async () => {
    try {
      const url = `https://api.adviceslip.com/advice`;
      const res = await axios.get(url);
      setSuggestion(res.data.slip.advice);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const getCatFact = async () => {
    try {
      const res = await axios.get("https://catfact.ninja/fact");
      setFact(res.data.fact);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100 px-5 md:px-0">
      <div className="text-center bg-white p-8 shadow rounded-2xl w-full max-w-md md:max-w-xl">
        <h1 className="text-3xl font-bold mb-4">
          🐱 Bored? Some Advice + Learn This!
        </h1>
        <p className="text-xl text-yellow-600 font-semibold mb-2">
          ✨ Your Advice:{" "}
        </p>
        <p className="mb-5">{suggestion && "➤" + " " + suggestion}</p>
        <p className="text-xl text-red-500 font-semibold mb-2">
          🧠 Random Cat Fact:
        </p>
        <p className="mb-5">{fact && fact + "🤯"}</p>
        <div className="flex justify-center items-center">
          <span className="mr-2 text-3xl">🔄</span>
          <button
            className="bg-green-500 text-white font-bold p-3 rounded-lg cursor-pointer"
            onClick={() => {
              getSugesstion();
              getCatFact();
            }}
          >
            New Suggestion
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;

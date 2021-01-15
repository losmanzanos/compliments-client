import React, { useState, useEffect } from "react";
import load from "../images/load.gif";

const GetComp = () => {
  const [compliment, setCompliment] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCompliment = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/random");
      console.log(response);
      const jsonData = await response.json();
      setCompliment(jsonData);
      setLoading(false);
      if (response.status === 200) {
        reveal();
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const reveal = () => {
    document.getElementById("show-comp").style.display = "block";
  };

  return (
    <div className="get-comp">
      <p>Get a compliment!</p>
      <div id="output">
        {loading ? (
          <div className="loading-div">
            <img id="loading" src={load} alt="loading" />
          </div>
        ) : (
          <div id="show-comp">{compliment.compliment}</div>
        )}
      </div>
      <button
        type="submit"
        onClick={() => getCompliment()}
        className="thumbs-up"
      >
        👍
      </button>
    </div>
  );
};

export default GetComp;

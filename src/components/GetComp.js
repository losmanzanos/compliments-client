import React, { useState } from "react";

const GetComp = () => {
  const [compliment, setCompliment] = useState([]);

  const getCompliment = async () => {
    try {
      const response = await fetch("https://compliment-server.herokuapp.com/random");
      const jsonData = await response.json();
      setCompliment(jsonData);
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
      <div id="show-comp">{compliment.compliment}</div>
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

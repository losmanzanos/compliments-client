import React, { useState } from "react";

const GiveComp = () => {
  const [compliment, setCompliment] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { compliment };
      const response = await fetch("http://localhost:6969/compliments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      // window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
    setCompliment("");
  };

  return (
    <>
      <form className="give-comp" onSubmit={handleSubmit}>
        <p>Give a compliment!</p>
        <input
          class="comp-input"
          type="text"
          value={compliment}
          onChange={(e) => setCompliment(e.target.value)}
          placeholder="Enter your compliment..."
        ></input>
        <button className="submit">Submit!</button>
      </form>
    </>
  );
};

export default GiveComp;

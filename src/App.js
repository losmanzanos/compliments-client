import "./App.css";
import comp from "./images/tenor.gif";
import rocket from "./images/rocket.png";

//COMPONENTS!
import GetComp from "./components/GetComp";
import GiveComp from "./components/GiveComp";

function App() {
  return (
    <div className="App" id="App">
      <header className="App-header">
        <h1>The Compliment Generator</h1>
        <img src={comp} alt="compliments"></img>
      </header>
      <GetComp />
      <GiveComp />
      <div id="social">
        <p>
          Contact me at:
          <br />
          <a href="mailto:dahc.reverse@gmail.com?subject=YOU%20ROCK!">
            dahc.reverse@gmail.com
          </a>
        </p>
        <p>
          My{" "}
          <a href="https://github.com/losmanzanos" target="_blank">
            GitHub
          </a>{" "}
          and{" "}
          <a href="https://www.linkedin.com/in/chad-moravec/" target="_blank">
            LinkedIn
          </a>
        </p>
        <a id="rocket" href="#App">
          <img src={rocket} alt="go home" />
        </a>
      </div>
    </div>
  );
}

export default App;

import './about.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <p>
          <div id="containertop">
          <a href="https://google.com" class="button_logo" id="button_logo">home[Logo]</a>
          <a href="about.js" class="button_about" id="button_about">about</a>

            {/* <button type="button logo" id="button_logo" >[Insert Logo]</button> */}
            {/* <button type="button about" id="button_about">about</button> */}
        </div>
          </p>
      </header>
        <p>
          about 
        </p>
        {/* <div id="container">
            <button type="button logon-button" id="button_logon" >log in</button>
            <button type="button signup-button" id="button_signup">sign up</button>
        </div> */}
    </div>
  );
}

export default App;

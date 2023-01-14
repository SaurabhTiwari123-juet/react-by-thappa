/** @format */

import logo from "./logo.svg";
import "./App.css";

//render means to show and it always render one element only
// so use react fragments <></>
function App() {
	return (
		<>
			<div className='App'>
				<h1>this is heading</h1>
				<p>the 5 items are as follows.</p>
				<ol>
					<li>nav</li>
					<li>ddd</li>
					<li>cccc</li>
					<li>ffff</li>
					<li>ddd</li>
				</ol>

				{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
			</div>
		</>
	);
}

export default App;

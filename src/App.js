import logo from "./logo.svg"
import "./App.css"

function App() {
  return (
    <div className="App">
      <h1 class="App-name">Phạm Minh Thuận</h1>
      <h2>Learning to code and to becomes Development Fullstack</h2>
      <h3>Hôm nay là ngày 29 tháng 11 năm 2023</h3>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App

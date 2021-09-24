import "./App.scss";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <nav className="nav-app">
          <p className="header-title"><a href="/">PORTFOLIO</a></p>
          <ul className="header-list">
            <li>
              <a><Link className="link" to="/">HOME</Link></a>
            </li>
            <li>
              <a><Link className="link" to="/about">ABOUT</Link></a>
            </li>
            <li>
              <a><Link className="link" to="/contact">CONTACT</Link></a>
            </li>
            
          </ul>
        </nav>
      </header>
      <body className="app-body mt-4">
        <Switch>
          <Route path="/" component={Home}>
            <Home  />
          </Route>
        </Switch>
      </body>
     
    </div>
  );
}

export default App;

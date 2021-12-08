import "./styles/App.scss";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header container">
      <Nav />

      </header>
      <body className="app-body">
      
        <Switch>
          <Route exact path="/" component={Home}>
            <Home />
          </Route>
          <Route path="/about" component={About}>
            <About />
          </Route>
        
        </Switch>
      </body>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;

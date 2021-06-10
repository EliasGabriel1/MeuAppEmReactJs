import "./App.css";
import Home from "./Home";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContextProvider from "./Contexts/auth";

// var x= true
// function App() {
//   return (
//     <Router>
//          <Routes/>
//     </Router>
//   );
// }
function App() {
  return (
    <ContextProvider>
      <Router>
        <div>
          <Switch>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;

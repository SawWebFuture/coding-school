import OpenEyes from './Components/OpenEyes';
import CounterExample from './Components/CounterExample';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div> 
      
      
    <Router>

      <Header />
        <OpenEyes name="Scottchi"/>

        <Switch>
          <Route exact path="/">
            <h1 className="font-bold text-2x1">This is the home page</h1>
          </Route>
          <Route path="/about">
            <h1 className="font-bold text-2x1">About Page - Page</h1>
          </Route>
        </Switch>

        <Footer />
        
      </Router>

      
    </div>
  );
}

export default App;

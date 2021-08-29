// import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Add from "./components/Add";
import Edit from "./components/Edit";
import List from "./components/List";

function App() {


  return (
    <div className="App container">
         <h1> Todo App </h1>
         <br/>
     

      <Router>
        <Switch>
          <Route exact path="/" component={List} />
              
          <Route exact path="/add" component={Add} />
          
          <Route exact path="/edit/:id" component={Edit} />

        </Switch>
      </Router>

     
    </div>
  );
}

export default App;

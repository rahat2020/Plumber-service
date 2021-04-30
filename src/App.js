import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddProduct from './components/Dashboard/AddProduct/AddProduct';
import AddReview from './components/Dashboard/AddReview/AddReview';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
              <Login></Login>
          </Route>
          <Route path="/dashboard">
              <Dashboard></Dashboard>
          </Route>
          <Route path="/addProduct">
              <AddProduct></AddProduct>
          </Route>
          <Route path="/addReview">
              <AddReview></AddReview>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;

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
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { createContext, useState } from 'react';
import Order from './components/MakeOrder/Order/Order';
import CheckOut from './components/MakeOrder/ChcekOut/CheckOut';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
              <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/addProduct">
              <AddProduct></AddProduct>
          </Route>
          <Route path="/addReview">
              <AddReview></AddReview>
          </Route>
          <Route path="/checkout/:_id">
              <CheckOut></CheckOut>
          </Route>
          <Route path="/order/:_id">
              <Order></Order>
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;

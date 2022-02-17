import './App.css';
// import DeleteUsers from './components/DeleteUsers';
import GetUsers from './components/GetUsers';
import PostUsers from './components/PostUsers';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {Home, About, Users, UserDetails} from "./views";
import UserContextProvider from './context/UserContext';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
      {/* <GetUsers/>
      <PostUsers/> */}

      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users/:id">
            <UserDetails />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
        </Switch>

      </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;

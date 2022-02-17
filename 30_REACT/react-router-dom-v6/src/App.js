import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import {Home,About, Users, UserDetails} from "./views";
import UserContextProvider from "./context/UserContext";

function App() {
  return (
    <div className="App">
     <UserContextProvider>
       <Router>
         <nav>
           <ul>
             <li>
               <Link to="/">Home</Link>
               <Link to="/about">About</Link>
               <Link to="/users">Users</Link>
             </li>
           </ul>
         </nav>
         <Routes>
           <Route path ="/about" element={<About/>}/>
           <Route path ="/users" element={<Users/>}/>
           <Route path ="/users/:id" element={<UserDetails/>}/>
           <Route path ="/" element={<Home/>}/>
         </Routes>
       </Router>
     </UserContextProvider>
    </div>
  )
}

export default App;

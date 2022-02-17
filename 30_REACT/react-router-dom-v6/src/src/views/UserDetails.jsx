import { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext";



const UserDetails = () => {
  const {id} = useParams();
  const {users} = useContext(UserContext);
  const [user,setUser] = useState('');

  const history = useHistory();
  useEffect(()=>{
    //ovo vraca niz
    const user = users.filter(user=> user.id === parseInt(id))[0];
    //ovo vraca objekat
    const user1 = users.find(user=> user.id === parseInt(id));
    setUser(user1);
  },[])

  const handleHomeButton = () =>{
    history.push('/');
  };
  const handleBackButton = () =>{
    history.goBack();
  };
  

  return (
    <div>
      <button onClick={handleHomeButton}>Home</button>
      <button onClick={handleBackButton}>Back</button>

    <div>
      {user ? (<div>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.website}</p>
      </div>) : <div>We can't find user.</div>}
    </div>
    </div>
  )
}

export default UserDetails;

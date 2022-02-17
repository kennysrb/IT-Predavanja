import React, {useState,useEffect} from 'react'
import API from '../config/api'
import DeleteUsers from './DeleteUsers'

const GetUsers = () => {
  const [users, setUsers] = useState([])

  useEffect(()=>{
    const users = API.get('users').then(res =>{
      setUsers(res.data)
    })
  },[]);

  const removeUser = (id) =>{
  const filteredUsers = users.filter((user)=>user.id !== parseInt(id))  
  setUsers(filteredUsers)};
  
  return (
    <div>
      <ul>
      {users.map(user =>(
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
    <DeleteUsers users={users} removeUser={removeUser}/>
    </div>
    
  )
}

export default GetUsers

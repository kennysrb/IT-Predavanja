import React, {useState, useContext} from 'react'
import { BookContext } from '../context/BookContext'

const BookForm = () => {
  const {dispatch} = useContext(BookContext)
  const[title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit= (e)=>{
      e.preventDefault();
      if(!title.trim() || !author.trim()) {
        alert("You need to insert text in all fields");
        return;
      } 
      
      dispatch({
        type: "ADD_BOOK",
        payload: {
            title,
            author,
        }
      });

      setTitle("");
      setAuthor("");
  }


  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Book Title' value={title} onChange={(e)=> setTitle(e.target.value)}/>
        <input type="text"placeholder='Book Author' value={author} onChange={(e)=> setAuthor(e.target.value)}/>
        <input type="submit" value="Add book"/>
    </form>
  )
}

export default BookForm

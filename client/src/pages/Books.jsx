import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


const Books = () => {
       const [books, setbooks] = useState([])
    useEffect(() => {
  
    const fetchAllBooks = async () => {
        try{
            const res = await axios.get("http://localhost:8000/books", { crossdomain: true })
            setbooks(res.data);
        }catch(err) {
            console.log(err)
        }
    }
    fetchAllBooks()
    }, [])
    

  return (
    <div>
   <h1>Lama books</h1>
   {books.map( (book) => (
    <div key={book.id}>
        {book.cover && <img src={book.cover} alt=""/>}
        <h1>{book.title}</h1>
        <p>{book.description}</p>
    </div>
   ))}
   <button><Link to="/add">Add new book</Link></button>
    </div>
  )
}

export default Books

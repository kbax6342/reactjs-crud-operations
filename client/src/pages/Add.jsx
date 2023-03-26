import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Add = () => {
    const [book, setbook] = useState({
        tite: " ",
        description: "",
        cover: ""
    })

    const navigate = useNavigate()
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
      };

    const handleChange = (e) =>{
        setbook((prev) => ({...prev, [e.target.name]:  e.target.value}));
    }

    const handleClick = async (e) =>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:8000/books", book, {headers:{"Content-Type" : "application/json"}})
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }

  return (
    <div >
      <h1>Add new book</h1>
      <input type="text" onChange={handleChange} placeholder='title'/>
      <input type="text" onChange={handleChange} placeholder='description'/>
      <input type="text" onChange={handleChange} placeholder='cover'/>
    <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Add

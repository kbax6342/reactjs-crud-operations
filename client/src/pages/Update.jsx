import React, {useState} from 'react'

const Update = () => {
    const [book, setbook] = useState({
        tite: " ",
        description: "",
        price:null,
        cover: ""
    })
  return (
    <div>
      <h1>Add new book</h1>
      <input type="text" placeholder='title'/>
      <input type="text" placeholder='description'/>
      <input type="text" placeholder='number'/>
      <input type="text" placeholder='cover'/>

    </div>
  )
}

export default Update

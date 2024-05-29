import axios from 'axios'
import React, { useState } from 'react'


const Post = () => {
    const data = {fname:'',lname:''}

    const [inputData, setInputData] = useState(data)

    const handleChange = (e) => {
        setInputData({...inputData, [e.target.name]:e.target.value})
        console.log();
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/Product' , inputData)
        .then((res) => {
            console.log(res);
        })
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        axios.put('http://localhost:5000/Product/1' , inputData)
        .then((res) => {
            console.log(res);
        })
    }

    const handleDelete = (e) => {
        e.preventDefault()
        axios.delete('http://localhost:5000/Product' , inputData)
        .then((res) => {
            console.log(res);
        })
    }

    return (
    <div>
      Hello Aixos
      <label>First Name</label>
      <input type="text" name='fname' value={inputData.fname} onChange={handleChange} />
      <label>Last Name</label>
      <input type="text" name='lname' value={inputData.lname} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>

    </div>
  )
}

export default Post

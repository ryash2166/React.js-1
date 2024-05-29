// Axios Get Request


import axios  from 'axios'
import React, { useEffect, useState } from 'react'


const Get = () => {
    const [data , setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/Product')
        .then((response) => {
            console.log(response);
            setData(response.data)
        })
    }, [])
  return (
    <div>
      <div>
        {
            data.map((item) => {
                return(
                    <div>
                        {item.title}
                        <img src={item.image} alt="" height='200px' width='200px' style={{objectFit: 'contain'}}/>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Get

"use client"
import React, { useState } from 'react'
import Navbar from './Navbar'
import NewsBoard from './NewsBoard'

const App = () => {
    const [category,setCategory] = useState("general");

  return (
    <div>
        <Navbar setCategory= {setCategory}/>
        <NewsBoard category= {category}/>
    </div>
  )
}

export default App
import React, { useState } from 'react'
import Card from './Card';
import "./index.css"
import UpcomingBirthday from './UpcomingBirthday';

const App = () => {



  return (
    <div className='body'>
    <h1 style={{ color: "lightpink"}}>Today's Birthday</h1>
    <Card/>
    <h1 style={{ color: "lightgreen"}}>Upcoming Birthday</h1>
    <UpcomingBirthday />
    </div>
  )
}

export default App

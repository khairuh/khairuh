import { Button, TextField } from '@mui/material'
import React, {useState} from 'react'

const StateBasics = () => {
  var [name,setname]=useState("name ahhn")
  var[a,seta]=useState()

  const inputHandler =(e)=>{
    console.log(e.target.value)
    setname(e.target.value)
  }

  const submitHandler=()=>{
    seta(name)
  }
  return (
    <div>
        <br /><br /><br />
        <h1>heyy {a}</h1>
        <TextField label="enter your name" varient='outlined' onChange={inputHandler}/>
        <br /><br/>
        <Button varient='contained' onClick={submitHandler}>Submit</Button>
    </div>
  )
}

export default StateBasics
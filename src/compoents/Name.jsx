
import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Name = () => {
     var[a,seta]=useState()

const inpt1=()=>{
    seta("react")
}

const inpt2=()=>{
    seta("Angular")
}

const inpt3=()=>{
    seta("python")
}
useEffect(()=>
inpt2()

,[])
   
  return (
    <div>
      <br /><br /><br />
      <h2>welcome {a}</h2>
      <br /><br /><br />
      <Button variant='contained' color='error' onClick={inpt1}>react</Button>
      &nbsp;&nbsp;
      <Button variant='contained' color='secondary' onClick={inpt2}>angular</Button>
      &nbsp;&nbsp;
      <Button variant='contained' color='success' onClick={inpt3}>python</Button>
      &nbsp;&nbsp;
    </div>
  )
}

export default Name

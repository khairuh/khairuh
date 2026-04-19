import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
      <br /><br /><br /><br />
        <TextField label="NAME" variant="outlined" /><br />
        <TextField label="AGE" variant="outlined" /><br />
        <TextField label="Dept" variant="outlined" /><br />
        <Button variant="contained">Submit</Button>



</div>
  )
}

export default Signup
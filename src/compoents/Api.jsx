import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Api = () => {
    var[user,setuser]=useState([])
  
    axios.get("https://fakestoreapi.com/products")
    .then((res)=>{
        setuser(res.data)
        console.log(user)
    
    })
  return(
    <div>
         <Grid container spacing={2}>
        {user.map((val1)=>{
            return(

         <card sx={{ maxWidth: 345 }}>
     <CardMedia
        sx={{ height: 140 }}
        image={val1.image}
        title="green iguana"
     />
     <CardContent>
       <Typography gutterBottom variant="h5" component="div">
            {val1.title}
       </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           {val1.description}
        </Typography>
     </CardContent>
     <CardActions>

        <Button size="small">share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
</card>
)
   })}
    </Grid>

</div>

  )
}
export default Api

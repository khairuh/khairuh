import { AppBar, Button, Toolbar} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>

        <AppBar>
            <Toolbar>
                <h3>MyApp</h3> &nbsp;
                <Link to="/login">
                <Button variant='contained' color='success'>Login</Button>
                </Link> &nbsp;

                <Link to="/signup">
                <Button variant='contained' color='success'>SignUp</Button>
                </Link> &nbsp;

                <Link to="/state">
                <Button variant='contained' color='success'>StateBasics</Button>
                </Link>

                <Link to='/name'>
                <Button variant='contained' color='success'>name</Button>
                </Link>

                <Link to='/Api'>
                <Button variant='contained' color='success'>Api</Button>
                </Link>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar
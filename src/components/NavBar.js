import React from 'react'
import {Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const NavBar = () => {
    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                      Dive Maps
                      <Link to="/">Home</Link>
                      <Link to="/diveSites">Divesites</Link>
                      <Link to="/createDivesite">Create Dive Site</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar

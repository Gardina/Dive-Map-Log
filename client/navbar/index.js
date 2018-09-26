import React from 'react'
import {Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'


const NavBar = () => {

    return(
        <div>
            <AppBar position="static" color="default">
                <Toolbar>
                    <IconButton color="inherit" aria-label="Menu">
                      <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" size='large'>
                      <Button>
                        <Link to="/createDivesite" style={{ textDecoration: 'none' }}>
                          Create New Dive Site
                        </Link>
                      </Button>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar

import React , { Component } from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'

class LogBook extends Component {

  render() {

    return (
      <Paper style={{ height: '90vh', width: '100%' }}>
        <MenuList>
          <Typography variant='headline' color='textPrimary' align='center'>
            My Log Book
          </Typography>
          <Typography variant='body1' color='textSecondary'>
            <MenuItem>1. Madona Rock</MenuItem>
            <MenuItem>2. Napoleo Thila</MenuItem>
            <MenuItem>3. Moray Beach </MenuItem>
            <MenuItem>4. Moray Beach</MenuItem>
            <MenuItem>5. Moray Beach</MenuItem>
            <MenuItem>6. Moray Beach</MenuItem>
          </Typography>em>
        </MenuList>
      </Paper>
    )
  }
}

export default LogBook

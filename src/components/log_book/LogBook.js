import React , { Component } from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import {connect} from 'react-redux'
import * as actions from '../../actions'

import ContainedButton from '../containedButton'

const diverId = "diver1";

class LogBook extends Component {

  componentWillMount(){
    this.props.fetchLog(diverId)
    }

  renderLog(){
      const LogItem = ({number, name, depth, time}) =>  <MenuItem>{number}. {name} depth {depth}m time {time}min</MenuItem>;
      const Log = this.props.logBook.logBook
      return Log.map((entry, i) => {return (
        <LogItem number={i+1} name={entry.siteName} depth={entry.depth} time={entry.time} key={i}/>
      )} )
    }
  render() {
    return (
      <Paper style={{ height: '90vh', width: '100%' }}>
        <MenuList>
          <Typography variant='headline' color='textPrimary' align='center'>
            My Log Book
          </Typography>
          <Typography variant='body1' color='textSecondary'>
            {this.renderLog()}
          </Typography>
        </MenuList>
        <ContainedButton text="Add new dive" color="primary"></ContainedButton>
        <ContainedButton text="Show my LogBook" color='default'></ContainedButton>
      </Paper>
    )
  }
}

function mapStateToProps(logBook) {
  return {logBook}
}


export default connect(mapStateToProps, actions)(LogBook)

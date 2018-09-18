import React , { Component } from 'react';
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';

class createDive extends Component {

  onSubmit(values){
    this.props.createDive(values, () => {
      this.props.history.push('/')
    })
  }

  render(){
    const { handleSubmit } = this.props
    return (
      <Paper style={{ height: '90vh', width: '100%' }}>
      <form >
          <Button type="submit">Sumbit</Button>
      </form>
    </Paper>
    )
  }
}

export default createDive

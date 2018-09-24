import React , { Component } from 'react';
import {Field, reduxForm, change} from 'redux-form'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';

import {createNewDive}  from 'client/create-new-dive/redux/actions'

class CreateNewDiveForm extends Component {

  renderField(field){
    return (
      <div>
        <InputLabel>{field.label}</InputLabel>
            <Input
              type="text"
              fullWidth={true}
              {...field.input}
            />
      </div>
    )
  }

  onSubmit(values){
    this.props.history.push('/')
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <Paper style={{ height: '90vh', width: '100%' }}>
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
        <Typography variant='headline' color='textPrimary' align='center'>
          To create new dive
        </Typography>
        <Typography variant='headline' color='textPrimary' align='center'>
          click on the divesite to get coordinates and name
        </Typography>
        <Field
          name="SiteName"
          component={this.renderField}
          label="Dive Site Name"
          />
        <Field
          name="MaxDepth"
          component={this.renderField}
          label="Max Depth Reached"
          />
        <Field
          name="BottomTime"
          component={this.renderField}
          label="Bottom Time"
          />
        <Field
          name="Latitude"
          component={this.renderField}
          label="Latitude"
          />
        <Field
          name="Longitude"
          component={this.renderField}
          label="Longitude"
          />
          <Button type="submit" fullWidth={true}>
            Sumbit
          </Button>
          <Button type="submit" color="secondary" fullWidth={true}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              Cancel
            </Link>
          </Button>
      </form>
    </Paper>
    )
  }
}

function validate(values) {
  const errors = {};
  return errors;
}

export default reduxForm({
  validate,
  form: 'newDiveForm'
})(
  withRouter(connect(null, {createNewDive})(CreateNewDiveForm))
)
import React , { Component } from 'react';
import {Field, reduxForm, change} from 'redux-form'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';

import {createDiveSite}  from 'client/google-map/redux/actions'


class CreateSiteForm extends Component {

  componentWillReceiveProps(nextProps){
    if(nextProps.getCoord.getCoord !== this.props.getCoord.getCoord){
      this.props.dispatch(change('newSiteForm', 'Latitude', nextProps.getCoord.getCoord.lat));
      this.props.dispatch(change('newSiteForm', 'Longitude', nextProps.getCoord.getCoord.lng));
    }
  }

  renderField(field){
    return (
      <div>
        <InputLabel>{field.label}</InputLabel>
            <Input
              type="text"
              fullWidth="true"
              {...field.input}
            />
      </div>
    )
  }

  onSubmit(values){
    this.props.createDiveSite(values)
    this.props.history.push('/')
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <Paper style={{ height: '90vh', width: '100%' }}>
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
        <Typography variant='headline' color='textPrimary' align='center'>
          To create new dive site
        </Typography>
        <Typography variant='headline' color='textPrimary' align='center'>
          click on the map to get coordinates
        </Typography>
        <Field
          name="newSiteName"
          component={this.renderField}
          label="New Site Name"
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
          <Button type="submit" fullWidth="true">Sumbit</Button>
      </form>
    </Paper>
    )
  }
}

function validate(values) {
  const errors = {};
  return errors;
}

function mapStateToProps(getCoord) {
  return {getCoord}
}

export default reduxForm({
  validate,
  form: 'newSiteForm'
})(
  withRouter(connect(mapStateToProps, {createDiveSite})(CreateSiteForm))
)

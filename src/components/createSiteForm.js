import React , { Component } from 'react';
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {createDiveSite}  from '../actions'

class CreateSiteForm extends Component {
  renderField(field){
    return(
    <div>
      <label>{field.label}</label>
      <input
        type="text"
        {...field.input}
        />
    </div>
  )
  }

  render() {
    return (
      <form>
        <h1>Click on the map to add new dive location</h1>
        <p>or put coordinates manually</p>
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
      </form>
    )
  }
}

function validate(values) {
  const errors = {};
  return errors;
}

export default reduxForm({
  validate,
  form: 'newSiteForm'
})(
  connect(null, {createDiveSite})(CreateSiteForm)
)

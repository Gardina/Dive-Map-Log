import React , { Component } from 'react';
import {Field, reduxForm, change} from 'redux-form'
import {connect} from 'react-redux'
import {createDiveSite}  from '../actions'
import {withRouter} from 'react-router-dom'

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
        <label>{field.label}</label>
        <input
          type="text"
          {...field.input}
          />
      </div>
    )
  }

  onSubmit(values){
    this.props.createDiveSite(values, () => {
      this.props.history.push('/')
    })
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
        <h1>Click on the map to add new dive location</h1>
        <p>or put coordinates manually</p>
        <Field
          name="newSiteName"
          component={this.renderField}
          label="New Site Name"
          />
        <h2>GPS coordinates</h2>
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
        <button type="submit">Sumbit</button>
      </form>
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

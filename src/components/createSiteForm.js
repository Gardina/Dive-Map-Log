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
        />
    </div>
    )
  }
  renderCoord(field){
    return (<div>{text}</div>)
  }

  handleChange(){

  }

  onSubmit(){
    this.props.createDiveSite(null, () =>{

      this.props.history.push('/')
    })
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h1>Click on the map to add new dive location</h1>
        <p>or put coordinates manually</p>
        <Field
          name="newSiteName"
          component={this.renderField}
          label="New Site Name"
          />
        <Field
            name="Latitude"
            component={this.renderCoord}
            label="Latitude"
            />
        <Field
            name="Longitude"
            component={this.renderCoord}
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
  connect(mapStateToProps, {createDiveSite})(CreateSiteForm)
)

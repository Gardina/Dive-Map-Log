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

  renderCoord(field){
    let c = ''
    field.label === 'Latitude' ? c = field.coord.lat : c = field.coord.lng
    field.coord.length === 0 ? field.input.value = '' : field.input.value = c

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

  handleOnFocus(field){
    console.log(field)
  }

  onSubmit(){
    let lat = this.props.getCoord.getCoord.lat
    let lng = this.props.getCoord.getCoord.lng
    this.props.createDiveSite(lat, lng, () =>{
     console.log('submit')
     this.props.history.push('/')
    })
  }

  render() {
    const coord = this.props.getCoord.getCoord
    const { handleSubmit, onFocus} = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
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
            coord={coord}
            onFocus={this.handleOnFocus.bind(this)}
            />
        <Field
            name="Longitude"
            component={this.renderCoord}
            label="Longitude"
            coord={coord}
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

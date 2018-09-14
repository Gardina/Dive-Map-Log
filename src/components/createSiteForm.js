import React , { Component } from 'react';
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {createDiveSite}  from '../actions'
import {withRouter} from 'react-router-dom'

class CreateSiteForm extends Component {

  renderField(field){
    const input = () => {return (
      <div>
        <label>{field.label}</label>
        <input
          type="text"
          {...field.input}
          />
      </div>
    )}

    const renderCoordinate = (coor) => {
      return <h3>{field.label} is {coor}</h3>
    }

    let coor = ''
    switch (field.label) {
      case "Latitude":
        coor = field.coord.lat
        return coor ? renderCoordinate(coor) : input()
      case "Longitude":
        coor = field.coord.lng
        return coor ? renderCoordinate(coor) : input()
      default:
        return input()
    }
  }

  onSubmit(){
    let lat = this.props.getCoord.getCoord.lat
    let lng = this.props.getCoord.getCoord.lng
    this.props.createDiveSite(lat, lng, () => {
      this.props.history.push('/')
    })
  }

  render() {
    const coord = this.props.getCoord.getCoord
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
            coord={coord}
            />
        <Field
            name="Longitude"
            component={this.renderField}
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
  withRouter(connect(mapStateToProps, {createDiveSite})(CreateSiteForm))
)

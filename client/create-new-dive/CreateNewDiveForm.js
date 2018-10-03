import React, { Component } from "react";
import { Field, reduxForm, change } from "redux-form";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { createNewDive } from "client/logbook/redux/actions";
import { createDiveSite } from "client/google-map/redux/actions";
import { validate } from "./formValidation";

class CreateNewDiveForm extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.getSitePosAndName !== this.props.getSitePosAndName) {
      this.props.dispatch(
        change("newDiveForm", "Latitude", nextProps.getSitePosAndName.lat)
      );
      this.props.dispatch(
        change("newDiveForm", "Longitude", nextProps.getSitePosAndName.lng)
      );
      this.props.dispatch(
        change("newDiveForm", "newSiteName", nextProps.getSitePosAndName.name)
      );
    }
  }

  renderField(field) {
    const {
      meta: { touched, error }
    } = field;
    return (
      <div>
        <InputLabel>{field.label}</InputLabel>
        <Input color="error" type="text" fullWidth={true} {...field.input} />
        <Typography color="error">{touched ? error : ""}</Typography>
      </div>
    );
  }

  onSubmit(values) {
    this.props.history.push("/");
    this.props.createNewDive(values);
    this.props.createDiveSite(values);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <Paper style={{ height: "90vh", width: "100%" }}>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Typography variant="headline" color="textPrimary" align="center">
            To log your dive
          </Typography>
          <Typography variant="headline" color="textPrimary" align="center">
            click on existing divesite or click on the map to create new one
          </Typography>
          <Field
            name="newSiteName"
            component={this.renderField}
            label="Dive Site Name"
          />
          <Field name="Date" component={this.renderField} label="Date" />
          <Field
            name="MaxDepth"
            component={this.renderField}
            label="Max Depth Reached, meters"
          />
          <Field
            name="BottomTime"
            component={this.renderField}
            label="Dive Time, min"
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
            <Link to="/" style={{ textDecoration: "none" }}>
              Cancel
            </Link>
          </Button>
        </form>
      </Paper>
    );
  }
}

function mapStateToProps(state) {
  return { getSitePosAndName: state.getSitePosAndName };
}

export default reduxForm({
  validate,
  form: "newDiveForm"
})(
  withRouter(
    connect(
      mapStateToProps,
      { createNewDive, createDiveSite }
    )(CreateNewDiveForm)
  )
);

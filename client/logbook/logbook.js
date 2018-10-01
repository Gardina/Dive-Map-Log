import React, { Component } from "react";
import { Link } from "react-router-dom";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

import { fetchLog } from "client/logbook/redux/actions";

const diverId = "diver1";

class LogBook extends Component {
  componentWillMount() {
    this.props.fetchLog(diverId);
  }

  renderLog() {
    const LogItem = ({ number, name, depth, time }) => (
      <MenuItem>
        {number}. {name} depth {depth}m time {time}min
      </MenuItem>
    );
    return this.props.logBook.map((entry, i) => {
      return (
        <LogItem
          number={i + 1}
          name={entry.siteName}
          depth={entry.depth}
          time={entry.time}
          key={i}
        />
      );
    });
  }

  render() {
    return (
      <Paper style={{ height: "90vh", width: "100%" }}>
        <MenuList>
          <Typography variant="headline" color="textPrimary" align="center">
            My Log Book
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {this.renderLog()}
          </Typography>
        </MenuList>
        <Button fullWidth={true} color="primary">
          <Link to="/createNewDive" style={{ textDecoration: "none" }}>
            Add New Dive
          </Link>
        </Button>
        <Button fullWidth={true} color="default">
          Snow my Log
        </Button>
      </Paper>
    );
  }
}

function mapStateToProps(state) {
  return { logBook: state.logBook };
}

export default connect(
  mapStateToProps,
  { fetchLog }
)(LogBook);

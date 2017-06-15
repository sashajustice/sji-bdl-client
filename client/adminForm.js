import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import IncidentDetails from './incidentDetails'
import PerpDetails from './perpDetails'
import SupportDetails from './supportDetails'
import EditedReportForm from './editedReportForm'

const style = {
  margin: 20,
};

export default class AdminForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
    }
  }

  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open: false});
  }

  render() {
    const { report } = this.props;
    let { perpetrator, support } = this.props.report;
    if (support === undefined) {
      support = {}
    }
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose} />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onTouchTap={this.handleClose} />,
    ]

    return(
      <div>
        <RaisedButton label="Edit" onTouchTap={this.handleOpen} />
        <Dialog
          actions={actions}
          modal={true}
          open={this.state.open}
          autoScrollBodyContent={true} >
            <div className="admin-ui-container">
              <div className="admin-form-left">
                <Paper style={style} zDepth={1} >
                  <Table>
                    <TableHeader
                      adjustForCheckbox={false}
                      displaySelectAll={false}
                      enableSelectAll={false} >
                      <TableRow>
                        <TableHeaderColumn>Field</TableHeaderColumn>
                        <TableHeaderColumn>Data</TableHeaderColumn>
                      </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                      <TableRow>
                        <TableRowColumn>City</TableRowColumn>
                        <p className="admin-form-item">{report.city}</p>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>Where</TableRowColumn>
                        <p className="admin-form-item">{report.locationType}</p>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>When</TableRowColumn>
                        <p className="admin-form-item">{report.date}</p>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>Gender</TableRowColumn>
                        <p className="admin-form-item">{report.gender}</p>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>Perp Name</TableRowColumn>
                        <p className="admin-form-item">{perpetrator.name}</p>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>Perp #</TableRowColumn>
                        <p className="admin-form-item">{perpetrator.phone}</p>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>Perp E-mail</TableRowColumn>
                        <p className="admin-form-item">{perpetrator.email}</p>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>Perp Type</TableRowColumn>
                        <p className="admin-form-item">{perpetrator.perpType}</p>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>Ad?</TableRowColumn>
                        <p className="admin-form-item">{perpetrator.adServiceUsed ? perpetrator.adServiceUsed : ''}</p>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>Perp Gender</TableRowColumn>
                        <p className="admin-form-item">{perpetrator.gender}</p>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>Perp Age</TableRowColumn>
                        <p className="admin-form-item">{perpetrator.age}</p>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>Perp Ethnicity</TableRowColumn>
                        <p className="admin-form-item">{perpetrator.race}</p>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>Perp Height</TableRowColumn>
                        <p className="admin-form-item">{perpetrator.height}</p>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>Perp Hair</TableRowColumn>
                        <p className="admin-form-item">{perpetrator.hair}</p>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>Perp Attributes</TableRowColumn>
                        <p className="admin-form-item">{perpetrator.attributes}</p>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>Perp Vehicle</TableRowColumn>
                        <p className="admin-form-item">{perpetrator.vehicle ? perpetrator.vehicle : ''}</p>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>Description</TableRowColumn>
                        <p className="admin-form-item">{report.assaultDescription}</p>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Paper>
              </div>
              <div className="admin-form-right">
                <Paper style={style} zDepth={1} >
                  <Table>
                    <TableHeader
                      adjustForCheckbox={false}
                      displaySelectAll={false}
                      enableSelectAll={false} >
                      <TableRow>
                        <TableHeaderColumn>Field</TableHeaderColumn>
                        <TableHeaderColumn>Data</TableHeaderColumn>
                      </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                      <TableRow>
                        <TableRowColumn>Location</TableRowColumn>
                        <p className="admin-form-item">Long Text</p>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>Support needed?</TableRowColumn>
                        <p className="admin-form-item">{support.needSupport ? support.needSupport : ''}</p>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>Preferred name?</TableRowColumn>
                        <p className="admin-form-item">{support.name ? support.name : ''}</p>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>Contact means?</TableRowColumn>
                        <p className="admin-form-item">{support.contact ? support.contact : ''}</p>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>Say SJI?</TableRowColumn>
                        <p className="admin-form-item">{support.callingFrom ? support.callingFrom : ''}</p>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Paper>
              <Paper style={style} zDepth={1} >
                <div>
                  <EditedReportForm />
                </div>
              </Paper>
            </div>
          </div>
        </Dialog>
      </div>
    )
  }
}
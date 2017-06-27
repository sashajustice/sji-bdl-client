import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';

import AdminFormContainer from './adminFormContainer'

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

export default class ReportsTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: true,
      showRowHover: true,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: false,
      height: '300px',
      open: false
    };
  }

  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open:false});
  }

  populateTable() {
    return (
      this.props.reports.map((report) => (
        <TableRow key={report._id}>
          <TableRowColumn>{report.perpetrator.name}</TableRowColumn>
          <TableRowColumn>{report.edited.toString()}</TableRowColumn>
          <AdminFormContainer report={report} fetchReports={this.props.fetchReports}/>
        </TableRow>
      ))
    )
  }

  render() {
    return (
      <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
          onCellClick={this.handleOnClick}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn colSpan="3" tooltip="All Reports" style={{textAlign: 'center'}}>
                Super Header
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="">Name</TableHeaderColumn>
              <TableHeaderColumn tooltip="">Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {this.populateTable()}
          </TableBody>
          <TableFooter
            adjustForCheckbox={this.state.showCheckboxes}
          >
            <TableRow>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    );
  }
}
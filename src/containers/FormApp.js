import React, { Component } from "react";
import FormList from "../components/FormList";
import { connect } from "react-redux";
import { actions } from "../actions";
import { Button } from "@dossier/salvia-ui";
import "./FormApp.css";

class FormApp extends Component {
  render() {
    const { 
       forms,
       onRemoveForm, 
       onAddForm } = this.props;
    return (
      <div className="App">
        <Button variant="pill" intent="success" onClick={onAddForm} elementSize='large'>
        Please add form
        </Button>
        <FormList forms={forms} removeForm={onRemoveForm}></FormList>
        
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    forms: state.get("forms")
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onAddForm(form) {
      dispatch(actions.addForm(form));
    },
    onRemoveForm(index) {
      dispatch(actions.removeForm(index));
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(FormApp);

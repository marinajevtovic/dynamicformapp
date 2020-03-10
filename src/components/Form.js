import React, { Component } from "react";
import { connect } from "react-redux";
import FieldGroupList from "./FieldGroupList";
import { getIn, Map } from "immutable";
import {actions} from  '../actions'
import ImmutablePropTypes from 'react-immutable-proptypes'
import PropTypes from "prop-types";
import {Button} from '@dossier/salvia-ui'

class Form extends Component {
  getFormJson = (formId, forms) => {
    
  forms.valueSeq().forEach(form => {
    if (form.getIn(["id"]) === formId) {
      const fileName = "form_" + formId;
      const json = JSON.stringify(form);
      const blob = new Blob([json], { type: "application/json" });
      const href = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = href;
      link.download = fileName + ".json";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return true;
    }
  })
  }
  render() {
    const {
      forms,
      formIndex,
      removeForm,
      onAddFieldGroup,
      onRemoveFieldGroup,
      onAddField,
      onRemoveField,
      onChangeProperty
    } = this.props;
    const id = forms.getIn([formIndex, "id"]);
    return (
      <><br/><h1>{forms.getIn([formIndex, "name"])+" "}
        <Button variant="regular" intent='danger' 
                onClick={() => removeForm(formIndex)}>X
        </Button>
        <Button variant="regular" intent='success'
                onClick={this.getFormJson.bind(this, id, forms)}>Download
        </Button>
        </h1><br/>
        <Button variant="pill" intent="success" 
                onClick={() => onAddFieldGroup(forms, formIndex)}>Add Field group
        </Button>
        <FieldGroupList
          fieldgroup={forms.getIn([formIndex, "fieldgroup"])}
          removeFieldGroup={onRemoveFieldGroup}
          formIndex={formIndex}
          addField={onAddField}
          removeField={onRemoveField}
          forms={forms}
          changeProperty={onChangeProperty}
        />
      </>
    )
  }
}
function mapStateToProps(state) {
  return {
    forms: state.get("forms")
  };
}
function mapDispatchToPorps(dispatch) {
  return {
    onAddFieldGroup(form,formIndex) {
      dispatch(actions.addFieldGroup(form, formIndex));
    },
    onRemoveFieldGroup(fieldgroupIndex, formIndex) {
      dispatch(actions.removeFieldGroup(fieldgroupIndex, formIndex));
    },
    onAddField(formIndex,fieldgroupIndex,fieldtype,description,placeholder) {
      dispatch(
        actions.addField(
          formIndex,
          fieldgroupIndex,
          fieldtype,
          description,
          placeholder
        )
      )
    },
    onRemoveField(formIndex, fieldGroupIndex, fieldIndex) {
      dispatch(actions.removeField(formIndex, fieldGroupIndex, fieldIndex));
    },
    onChangeProperty(formIndex, fieldGroupIndex, fieldIndex,checked){
     
      dispatch(actions.changeProperty(formIndex, fieldGroupIndex, fieldIndex,checked))
    }
  }
}

Form.propTypes={
  formIndex: PropTypes.number,
  removeForm: PropTypes.func,
 }

export default connect(mapStateToProps, mapDispatchToPorps)(Form);

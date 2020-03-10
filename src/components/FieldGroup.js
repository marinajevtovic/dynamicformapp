import React, { useState } from "react";
import "./FieldGroup.css";
import PropTypes from "prop-types";
import ImmutablePropTypes from "react-immutable-proptypes";
import { Button, Checkbox, TextInput, FormLabel } from "@dossier/salvia-ui";
import NewModal from "./NewModal";

function FieldGroup(props) {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  };
  const onHide = () => {
    setShow(false);
  };
  
  const {
    fieldgroupIndex,
    fieldgroup,
    formIndex,
    removeFieldGroup,
    addField,
    removeField,
    changeProperty
  } = props;
  const fields = fieldgroup.get("fields");
  const onRemoveElement = (e, formIndex, fieldgroupIndex, index) => {
    e.preventDefault();
    return removeField(formIndex, fieldgroupIndex, index);
  };
  return (
    <div>
      <br />
      <h4> {fieldgroup.get("name")} </h4>
      <Button variant="pill" intent="success" onClick={() => handleClick()}>
        Enter field specification
      </Button>
      <Button
        variant="regular"
        intent="danger"
        onClick={() => removeFieldGroup(fieldgroupIndex, formIndex)}
      >
        X
      </Button>
      <hr></hr>
      <NewModal
        show={show}
        onHide={onHide}
        formIndex={formIndex}
        fieldgroupIndex={fieldgroupIndex}
        addField={addField}
      />

      {fields.map((item, index) => {
        let fieldtype = item.get("fieldtype");
        let description = item.get("description");
        let placeholder = item.get("placeholder");
        let id = item.get("id");
        let checked = item.get("checked");
        return (
          <form key={index}>
            <FormLabel>{description}</FormLabel>
            <br />
            {fieldtype === "checkbox" ? 
            (<Checkbox
                id={id}
                checked={checked}
                label={placeholder}
                onChange={() =>changeProperty(formIndex, fieldgroupIndex, index, checked)}
                className="salvia"
              ></Checkbox>) : 
              (<TextInput type={fieldtype} placeholder={placeholder}></TextInput>)
              }
             <Button
              variant="regular"
              intent="danger"
              onClick={e => onRemoveElement(e, formIndex, fieldgroupIndex, index)
              }
            >
              X
            </Button>
          </form>
        );
      })}
    </div>
  );
}
FieldGroup.propTypes = {
  fieldgroupIndex: PropTypes.number,
  fieldgroup: ImmutablePropTypes.map,
  formIndex: PropTypes.number,
  removeFieldGroup: PropTypes.func,
  addField: PropTypes.func,
  removeField: PropTypes.func
};
export default FieldGroup;

import React from "react";
import Form from "./Form";
import ImmutablePropTypes from "react-immutable-proptypes";

const FormList = props => {
  const { 
    forms,
    removeForm
 } = props;
  return (
    <>
      {forms.map((item, index) => {
        return (
          <Form key={index} formIndex={index} removeForm={removeForm} />
          
        );
      })}
    </>
  );
};
FormList.propTypes = {
  forms: ImmutablePropTypes.list
};
export default FormList;

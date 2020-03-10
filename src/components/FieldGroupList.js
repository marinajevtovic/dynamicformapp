import React from "react";
import FieldGroup from "./FieldGroup";
import PropTypes from "prop-types";
import ImmutablePropTypes from "react-immutable-proptypes";
const FieldGroupList = props => {
  const { 
    fieldgroup, 
    formIndex, 
    removeField, 
    removeFieldGroup, 
    addField,
    changeProperty 
} = props;
return (
<>{fieldgroup.map((item, index) => {
    return (
    <FieldGroup
        key={index}
        fieldgroupIndex={index}
        fieldgroup={item}
        formIndex={formIndex}
        removeFieldGroup={removeFieldGroup}
        addField={addField}
        removeField={removeField}
        changeProperty={changeProperty}
    />
    )
   })}
</>
)
}
FieldGroupList.propTypes={
fieldgroup:ImmutablePropTypes.list, 
formIndex:PropTypes.number, 
removeField:PropTypes.func, 
removeFieldGroup:PropTypes.func, 
addField:PropTypes.func 
}
export default FieldGroupList;

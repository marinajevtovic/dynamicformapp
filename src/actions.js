const ADD_FORM = "ADD_FORM";
const REMOVE_FORM = "REMOVE_FORM";
const ADD_FIELD_GROUP = "ADD_FIELD_GROUP";
const REMOVE_FIELD_GROUP = "REMOVE_FIELD_GROUP";
const ADD_FIELD = "ADD_FIELD";
const REMOVE_FIELD = "REMOVE_FIELD";
const CHANGEPROPERTY="CHANGEPROPERTY"

export const actions = {
  addForm() {
    return {
      type: ADD_FORM
    };
  },
  removeForm(index) {
    return {
      type: REMOVE_FORM,
      index
    };
  },
  addFieldGroup(forms, index) {
    return {
      type: ADD_FIELD_GROUP,
      forms: forms,
      index: index
    };
  },
  removeFieldGroup(fieldgroupIndex, formIndex) {
    return {
      type: REMOVE_FIELD_GROUP,
      fieldgroupIndex,
      formIndex
    };
  },
  addField(formIndex, fieldgroupIndex, fieldtype, description, placeholder) {
    return {
      type: ADD_FIELD,
      formIndex: formIndex,
      fieldgroupIndex: fieldgroupIndex,
      fieldtype: fieldtype,
      description: description,
      placeholder: placeholder
    };
  },
  removeField(formIndex, fieldGroupIndex, fieldIndex) {
    return {
      type: REMOVE_FIELD,
      formIndex,
      fieldGroupIndex,
      fieldIndex
    };
  },
  changeProperty(formIndex, fieldGroupIndex, fieldIndex,checked){
    return{
      type: CHANGEPROPERTY,
      formIndex,
      fieldGroupIndex,
      fieldIndex,
      checked
      
    }
  }
};

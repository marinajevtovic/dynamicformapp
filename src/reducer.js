
import {initialState} from './store'
import {fromJS,Map, updateIn, List} from 'immutable'


const ADD_FORM='ADD_FORM'
const REMOVE_FORM='REMOVE_FORM'
const ADD_FIELD_GROUP='ADD_FIELD_GROUP'
const REMOVE_FIELD_GROUP='REMOVE_FIELD_GROUP'
const ADD_FIELD='ADD_FIELD'
const REMOVE_FIELD='REMOVE_FIELD'
const CHANGEPROPERTY="CHANGEPROPERTY"

function nextID(obj){ return(obj.size ? Math.max(...obj.map((obj)=>{return obj.get('id')})):0)+1 }

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FORM: 
    { 
        const next_id = nextID(state.get("forms"));
        return state.updateIn(["forms"], list =>
        list.push(Map({
                id: next_id,
                name: "Form " + next_id,
                fieldgroup: List([])
            })
          )
        )
    }
    case REMOVE_FORM: 
    {
        return state.updateIn(["forms"], list =>
        list.filter((_, i) => i !== action.index)
        )
    }
    case ADD_FIELD_GROUP: 
    {
        const index = action.index;
        let next_id = nextID(action.forms.getIn([index, "fieldgroup"]));
        return state.updateIn(["forms", index, "fieldgroup"],list =>
        list.push(Map({
                id: next_id,
                name: "Field Group " + next_id,
                fields: List([])
            })
          )
      )
    }
    case REMOVE_FIELD_GROUP: 
    {
      const formIndex = action.formIndex;
      const fieldgroupIndex = action.fieldgroupIndex;
      return state.updateIn(["forms", formIndex, "fieldgroup"], list =>
      list.filter((_, i) => i !== fieldgroupIndex)
      );
    }
    case ADD_FIELD: 
    {
      const fieldgroupIndex = action.fieldgroupIndex;
      const formIndex = action.formIndex;
      let next_id=nextID(state.getIn(['forms',formIndex,'fieldgroup',fieldgroupIndex,'fields']))
      return state.updateIn(["forms", formIndex, "fieldgroup", fieldgroupIndex, "fields"],list =>
      list.push(Map({
                id:next_id,
                fieldtype: action.fieldtype,
                description: action.description,
                placeholder: action.placeholder,
                checked:false
            })
          )
      )
    }
    case REMOVE_FIELD: 
    {
      const formIndex = action.formIndex;
      const fieldGroupIndex = action.fieldGroupIndex;
      const fieldIndex = action.fieldIndex;
      return state.updateIn(["forms", formIndex, "fieldgroup", fieldGroupIndex, "fields"],list =>
      list.filter((_, i) => i !== fieldIndex)
      )
    }
    case CHANGEPROPERTY:{
      const formIndex = action.formIndex;
      const fieldGroupIndex = action.fieldGroupIndex;
      const fieldIndex = action.fieldIndex;
      const checked=action.checked
      return state.setIn(["forms", formIndex, "fieldgroup", fieldGroupIndex, "fields",fieldIndex,'checked' ],!checked)
    }
    default:
      return state;
  }
}

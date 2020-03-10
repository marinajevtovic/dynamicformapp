import {fromJS} from 'immutable'
import {reducer} from './reducer'
import { createStore, applyMiddleware, compose } from "redux";
import { logger } from "redux-logger";

export const initialState=fromJS({
   forms:[{
      id:1,
      name:'Form Example',
      fieldgroup:[{
        id:1,
        name:'Field Group Example ',
        fields:[{
          id:1,
          fieldtype:'input',
          description:'Enter your name',
          placeholder:'First name'
            },
            {
          id:2,
          fieldtype:'input',
          description:'Enter your surname',
          placeholder:'Last name'
            },
            {
          id:3,
          fieldtype:'checkbox',
          description:'Finished your task?',
          placeholder:'Finished',
          checked:false
            }]
            }]
            }]
          });
export const store = createStore(reducer,
  compose( applyMiddleware(logger), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));


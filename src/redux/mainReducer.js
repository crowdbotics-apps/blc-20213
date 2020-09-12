import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn42100675Reducer from '../features/SignIn42100675/redux/reducers'
import SignUp23100674Reducer from '../features/SignUp23100674/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn42100675: SignIn42100675Reducer,
SignUp23100674: SignUp23100674Reducer,

});
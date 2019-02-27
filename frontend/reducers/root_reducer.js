import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  session: sessionReducer,
  entities: entitiesReducer
});
import { combineReducers } from 'redux';
import jobReducer from './reducers/jobReducer';

const rootReducer = combineReducers({
  jobs: jobReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

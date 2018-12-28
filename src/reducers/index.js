import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

// We create one reducer called libraries and by default it return an array []
//we are assign LibraryReducer a key called libraries
//console.log(store.getState());
//{ libraries: [{ id: 1, title: 'Webpack', description:'....' }]}

//libraries is the key and it will appear in your state object
export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});

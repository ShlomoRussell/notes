import { combineReducers, createStore } from "@reduxjs/toolkit";
import { notesReducer } from "./reducers/note.reducers";

const rootReducer = combineReducers({notes:notesReducer});
const store = createStore(rootReducer);

export default store
import { addNoteAction, deleteNoteAction } from "../actions/noteActions";
interface Inotes{
    date: number;
    name: string;
    task:string
}
function addNoteReducer(state: Inotes[] = [], payload: any) {
  return [...state, payload];
}
function deleteNoteReducer(state: Inotes[] = [], payload: any) {
  return state.filter((n,i) => i!== payload);
}

export function notesReducer(state: Inotes[] = [], action: any) {
  switch (action.type) {
    case addNoteAction:
      return addNoteReducer(state, action.payload);
    case deleteNoteAction:
      return deleteNoteReducer(state, action.payload);
    default:
      return state;
  }
}
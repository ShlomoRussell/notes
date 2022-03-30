import store from "./store/store";
import { Button } from "react-bootstrap";
import { addNoteAction } from "./store/actions/noteActions";
import Cards from "./components/Cards";
import { useState } from "react";

function App() {
  const handleClick = (e: any) => {
    e.preventDefault();
    store.dispatch({
      type: addNoteAction,
      payload: {
        date: new Date().toString(),
        name: "Shlomo Russell",
        task: "Do Something " + Math.floor(Math.random() * 100),
      },
    });
  };
  const [count, setCount] = useState(store.getState().notes.length);
  store.subscribe(() => setCount(store.getState().notes.length));

  return (
    <div>
      {count > 0 ? "You have " + count + " task to get done " : null}
      <Button onClick={(e) => handleClick(e)}>Add a Task</Button>
      <Cards />
    </div>
  );
}

export default App;

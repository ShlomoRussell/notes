import store from './store/store';
import { Button } from 'react-bootstrap';
import { addNoteAction } from './store/actions/noteActions';
import Cards from './components/Cards';

function App() {
  const handleClick = (e:any) => {
    e.preventDefault()
    store.dispatch({
      type: addNoteAction,
      payload: {
        date: new Date().toString(),
        name: "Shlomo Russell",
        task: "Do Something " + Math.floor(Math.random() * 100),
      },
    });
  }
  
  return (
    <div>
      <Button onClick={(e)=>handleClick(e)}>Add note</Button>
      <Cards/>
    </div>
  );
}

export default App;

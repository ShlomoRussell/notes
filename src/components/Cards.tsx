import { ReactChild, ReactFragment, ReactPortal, useState } from "react"
import { Card, Button } from "react-bootstrap";
import { sortAndDeduplicateDiagnostics } from "typescript";
import { deleteNoteAction } from "../store/actions/noteActions";
import store from "../store/store"


function Cards() {
    const [addNoteAction, setCardsArray] = useState<any[]>(store.getState().notes);
    store.subscribe(() => setCardsArray(store.getState().notes));
    const handleClick = (e: any,date:number) => {
        e.preventDefault()
        store.dispatch({
            type: deleteNoteAction,
            payload:date,
        });
    }
  return (
    <div>
      {addNoteAction.map((n: any,i) => (
        <Card key={i} style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Todays Task</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{n.name}</Card.Subtitle>
            <Card.Text>
              {n.task}
              <br />
              {n.date}
              <br />
              <Button onClick={(e)=>handleClick(e,i)}>Remove Task</Button>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Cards
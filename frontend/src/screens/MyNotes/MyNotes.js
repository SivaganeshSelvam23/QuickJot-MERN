import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import {
  Accordion,
  Badge,
  Button,
  Card,
  useAccordionButton,
} from "react-bootstrap";

function MyNotes() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const { data } = await axios.get("/api/notes");
    setNotes(data);
  };

  const deleteHandler = (id) => {
    if (window.confirm("Are You Sure Want To Delete?")) {
    }
  };

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

    return <span onClick={decoratedOnClick}>{children}</span>;
  }

  return (
    <MainScreen title="Welcome Back Sivaganesh Selvam..">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
      {notes.map((note, index) => (
        <Accordion key={index}>
          <Card style={{ margin: 10 }}>
            <CustomToggle eventKey={index.toString()}>
              <Card.Header style={{ display: "flex" }}>
                <span
                  style={{
                    color: "black",
                    textDecoration: "none",
                    flex: 1,
                    cursor: "pointer",
                    alignSelf: "center",
                    fontSize: 18,
                  }}
                >
                  {note.title}
                </span>
                <div>
                  <Button variant="primary" href={`/note/${note._id}`}>
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="mx-2"
                    onClick={() => deleteHandler(note._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Header>
            </CustomToggle>
            <Accordion.Collapse eventKey={index.toString()}>
              <Card.Body>
                <h4>
                  <Badge bg="success" text="light">
                    Category - {note.category}
                  </Badge>
                </h4>
                <blockquote className="blockquote mb-0">
                  <p>{note.content}</p>
                  <footer className="blockquote-footer">
                    Created on - date
                  </footer>
                </blockquote>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
}

export default MyNotes;

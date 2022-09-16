import React, { useState } from 'react';
import { Note } from './models/note.model';

import './App.css';
import Header from './components/header';
import NotesList from './components/notes-list';
import { Col, Container, Row } from 'react-bootstrap';
import CreateNotes from './components/create-notes';

function App() {
  const [note,setNotes]=useState<Note[]>([]
  );

  return (
    
    <>
   <Header/>
   <Container className='mt-5'>
    <Row>
      <Col>
        <NotesList notes={note} setNotes={setNotes}/>
      </Col>
    </Row>
    <Row>
      <Col>
        <CreateNotes notes={note} setNotes={setNotes}/>
      </Col>
    </Row>

   </Container>
    </>
  );
}

export default App;

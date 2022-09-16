import * as React from 'react';
import { Note } from '../models/note.model';
import Notes from './notes';

interface INotestListProps {
    notes:Note[];
    setNotes:React.Dispatch<React.SetStateAction<Note[]>>
}

const NotesList: React.FunctionComponent<INotestListProps> = ({notes, setNotes}) => {
    const handleDelete=(id:string)=>{
       setNotes(notes.filter((note)=> note.id!==id)) 

    }
    const renderNotes=():JSX.Element[]=>{
      return notes.map(note=>{
           return <Notes key={note.id} note={note} handleDelete={handleDelete}/>
        })
    }
     
    return(

    <>
    <h2 className='mt-3'>
        <div>
          {renderNotes()}
        </div>
    </h2>
    </>
  ) ;
};

export default NotesList;

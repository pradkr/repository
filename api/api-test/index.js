import express from 'express';
import bodyParser from 'body-parser';
//import { getNotes, getNoteByID, deleteNote, createNote, updateNote } from './controllers/v1/notes.js'
//import { getNotesV2, getNoteByIDV2, deleteNoteV2, createNoteV2, updateNoteV2 } from './controllers/v2/notes.js'
import notesRoutesV1 from './routes/v1/index.js'
import notesRoutesV2 from './routes/v2/index.js'

const app  = express();
const PORT = 3000;

app.use(bodyParser.json());
app.get('/', (req, res)=> res.send('Welcome to the Notes App!'));

app.use('/v1/notes', notesRoutesV1);
app.use('/v2/notes', notesRoutesV2);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`) )

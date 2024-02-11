import express from 'express';
import bodyParser from 'body-parser';
import {v4 as uuidv4} from 'uuid';

const app  = express();
const PORT = 3000;

let notes = [];

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200);
    res.send('Hi')
});

app.post('/v1/notes', (req, res) => {
    console.log(req.body);
    notes.push({...req.body, id: uuidv4()})
    res.status(201);
    res.send(`created a note`)
});

app.get('/v1/notes', (req, res) => {
    res.status(200);
    res.send(notes)
});

app.get('/v1/notes/:id', (req, res) => {
    const {id} = req.params;
    const note = notes.find((n) => n.id == id );
    res.status(200);
    res.send(note)
});

app.delete('/v1/notes/:id', (req, res) => {
    const {id} = req.params;
    notes = notes.filter((n) => n.id != id );
    console.log(notes)
    res.status(202);
    res.send(`A note ${id} was deleted`)
});

app.patch('/v1/notes/:id', (req, res) => {
    const { id } = req.params;
    const { title, content, isDraft } = req.body;
    
    const note = notes.find((n) => n.id == id );
    if(title) {
        note.title = title;
    }
    
    if(content){
        note.content = content;
    }
    
    if (typeof isDraft !== 'undefined') {
        // the variable is defined
        note.isDraft = isDraft;
    }
    res.status(204);
    res.send(`Updated note with ID ${id}`)
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`) )


import { v4 as uuidv4, validate } from 'uuid';
//import  validator  from 'express-validator';
import {validationResult} from 'express-validator';
//const {validationResults} = validator;

let notes = []
 
export const getNotes = (req, res) => {
    res.send(notes);
}
 
export const createNote = (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const note = req.body;
 
    notes.push({...note, id: uuidv4() });
 
    res.send(`Added a Note with title: ${note.title}`);
}
 
export const getNoteByID = (req, res) => {
    const { id } = req.params;
    const note = notes.find((note) => note.id === id)
    res.send(note);
}
 
export const deleteNote = (req, res) => {
    const { id } = req.params;
    notes = notes.filter((note) => note.id != id);
    res.send(`Note with id ${id} was deleted`)
}
 
export const updateNote = (req, res) => {
    const { id } = req.params;
    const { title, content, isDraft } = req.body;
    const note = notes.find((note) => note.id === id);    
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
}

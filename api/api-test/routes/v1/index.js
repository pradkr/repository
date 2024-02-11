import express from 'express';
import validator from 'express-validator';
import { getNotes, getNoteByID, deleteNote, createNote, updateNote } from './../../controllers/v1/notes.js'
import { authicateJWT } from '../../controllers/v1/auth.js';

const {body} = validator;
const router = express.Router();
router.get('/', authicateJWT, getNotes);
router.post('/', authicateJWT, body('title').exists(),body('isDraft').isBoolean(), createNote);
router.get('/:id', authicateJWT, getNoteByID);
router.delete('/:id', authicateJWT, deleteNote);
router.patch('/:id', authicateJWT, updateNote);
export default router;

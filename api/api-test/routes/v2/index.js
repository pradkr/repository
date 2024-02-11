import express from 'express';
import { getNotes} from './../../controllers/v2/notes.js'
const router = express.Router();
router.get('/', getNotes);
//router.post('/', createNote);
//router.get('/:id', getNoteByID);
//router.delete('/:id', deleteNote);
//router.patch('/:id', updateNote);
export default router;

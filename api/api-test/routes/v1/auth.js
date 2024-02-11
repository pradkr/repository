import express from 'express';
 
import { loginUser } from '../../controllers/v1/auth.js';
 
const router = express.Router();
 
router.post('/', loginUser);
 
export default router;
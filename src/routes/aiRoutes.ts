import express from 'express';
import * as aiController from '../controllers/aiController';

const router = express.Router();

router.post('/build', aiController.buildWorkspace);
router.get('/generate/:id', aiController.generateScript);

// ... You can add more routes for update, delete, and add contributors.

export default router;

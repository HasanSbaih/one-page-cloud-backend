import express from 'express';
import * as workspaceController from '../controllers/workspaceController';

const router = express.Router();

router.get('/', workspaceController.getWorkspace);
router.get('/:id', workspaceController.getWorkspaceById);
router.post('/', workspaceController.createWorkspace);
router.put('/:id', workspaceController.updateWorkspace);

// ... You can add more routes for update, delete, and add contributors.

export default router;

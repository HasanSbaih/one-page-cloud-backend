import express from 'express';
import * as resourcesController from '../controllers/resourcesController';

const router = express.Router();

router.get('/', resourcesController.getResources);
router.get('/links', resourcesController.getLinks);

// ... You can add more routes for update, delete, and add contributors.

export default router;

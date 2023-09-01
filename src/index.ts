import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import workspaceRoutes from './routes/workspaceRoutes';
import aiRoutes from './routes/aiRoutes';
import resourcesRoutes from './routes/resourcesRoutes';
import cors from 'cors';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());


const MONGO_URI = 'mongodb://localhost:32768/mojojojo';

if (!MONGO_URI) {
    console.error('MONGO_URI is not defined in .env');
    process.exit(1);
}

mongoose.connect(MONGO_URI);

app.use(express.json());
app.use('/workspace', workspaceRoutes);
app.use('/ai', aiRoutes)
app.use('/resources', resourcesRoutes);

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});

import { Router } from 'express';
import { graveRouter } from '../api/grave';

const router = Router();

router.use('/grave', graveRouter);

export default router;

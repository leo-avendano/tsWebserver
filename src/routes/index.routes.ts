import e, { Router } from 'express';
import { defaultController } from '../controllers/defaultController';

const indexRouter: Router = e.Router();

indexRouter.get('/', defaultController);

export { indexRouter };
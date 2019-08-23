import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

/*
- Routes
- */

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// apos essa rota é necessario está autentificado
routes.use(authMiddleware);
routes.put('/users', UserController.update);

/*
- Routes
- */

export default routes;

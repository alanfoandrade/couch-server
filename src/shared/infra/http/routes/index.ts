import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import couchsRouter from '@modules/couchs/infra/http/routes/couchs.routes';
import ratingsRouter from '@modules/ratings/infra/http/routes/ratings.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/couchs', ensureAuthenticated, couchsRouter);
routes.use('/ratings', ensureAuthenticated, ratingsRouter);

export default routes;

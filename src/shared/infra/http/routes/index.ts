import { Router } from 'express';

import chargesRouter from '@modules/charges/infra/http/routes/charges.routes';
import driversRouter from '@modules/drivers/infra/http/routes/drivers.routes';

const routes = Router();

routes.use('/charges', chargesRouter);
routes.use('/drivers', driversRouter);

export default routes;

import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import DriversController from '../controllers/DriversController';

const driversRouter = Router();

const driversController = new DriversController();

// GET: baseURL/drivers
/**
 * Show all drivers.
 */
driversRouter.get('/', driversController.index);

// GET: baseURL/drivers/:driver_id
/**
 * Show specific driver.
 */
driversRouter.get(
  '/:driver_id',
  celebrate({
    [Segments.PARAMS]: {
      driver_id: Joi.string().uuid().required(),
    },
  }),
  driversController.show,
);

// POST: baseURL/drivers
/**
 * Register driver.
 */
driversRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
    },
  }),
  driversController.create,
);

// PUT: baseURL/drivers/:driver_id
/**
 * Update Driver.
 */
driversRouter.put(
  '/:driver_id',
  celebrate({
    [Segments.PARAMS]: {
      driver_id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      name: Joi.string().required(),
    },
  }),
  driversController.update,
);

// DELETE: baseURL/drivers/:driver_id
/**
 * Delete Driver.
 */
driversRouter.delete(
  '/:driver_id',
  celebrate({
    [Segments.PARAMS]: {
      driver_id: Joi.string().uuid().required(),
    },
  }),
  driversController.destroy,
);

export default driversRouter;

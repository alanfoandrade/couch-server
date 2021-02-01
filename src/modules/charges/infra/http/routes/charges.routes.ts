import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import ChargesController from '../controllers/ChargesController';

const chargesRouter = Router();

const chargesController = new ChargesController();

// GET: baseURL/charges
/**
 * Show all charges.
 */
chargesRouter.get('/', chargesController.index);

// GET: baseURL/charges/:charge_id
/**
 * Show specific charge.
 */
chargesRouter.get(
  '/:charge_id',
  celebrate({
    [Segments.PARAMS]: {
      charge_id: Joi.string().uuid().required(),
    },
  }),
  chargesController.show,
);

// POST: baseURL/charges
/**
 * Register charge.
 */
chargesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
    },
  }),
  chargesController.create,
);

// PUT: baseURL/charges/:charge_id
/**
 * Update Charge.
 */
chargesRouter.put(
  '/:charge_id',
  celebrate({
    [Segments.PARAMS]: {
      charge_id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      value: Joi.number().required(),
    },
  }),
  chargesController.update,
);

// DELETE: baseURL/charges/:charge_id
/**
 * Delete Charge.
 */
chargesRouter.delete(
  '/:charge_id',
  celebrate({
    [Segments.PARAMS]: {
      charge_id: Joi.string().uuid().required(),
    },
  }),
  chargesController.destroy,
);

export default chargesRouter;

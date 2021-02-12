import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import CouchsController from '../controllers/CouchsController';

const couchsRouter = Router();

const couchsController = new CouchsController();

// GET: baseURL/couchs
/**
 * Show all couchs.
 */
couchsRouter.get('/', couchsController.index);

// GET: baseURL/couchs/:couch_id
/**
 * Show specific couch.
 */
couchsRouter.get(
  '/:couch_id',
  celebrate({
    [Segments.PARAMS]: {
      couch_id: Joi.string().uuid().required(),
    },
  }),
  couchsController.show,
);

// POST: baseURL/couchs
/**
 * Register couch.
 */
couchsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      model: Joi.string().required(),
      seaters: Joi.number().integer().required(),
      length: Joi.number().integer().required(),
      height: Joi.number().integer().required(),
      width: Joi.number().integer().required(),
    },
  }),
  couchsController.create,
);

// PUT: baseURL/couchs/:couch_id
/**
 * Update Couch.
 */
couchsRouter.put(
  '/:couch_id',
  celebrate({
    [Segments.PARAMS]: {
      couch_id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      model: Joi.string().required(),
      seaters: Joi.number().integer().required(),
      length: Joi.number().integer().required(),
      height: Joi.number().integer().required(),
      width: Joi.number().integer().required(),
    },
  }),
  couchsController.update,
);

// DELETE: baseURL/couchs/:couch_id
/**
 * Delete Couch.
 */
couchsRouter.delete(
  '/:couch_id',
  celebrate({
    [Segments.PARAMS]: {
      couch_id: Joi.string().uuid().required(),
    },
  }),
  couchsController.destroy,
);

export default couchsRouter;

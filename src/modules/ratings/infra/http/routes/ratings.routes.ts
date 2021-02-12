import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import RatingsController from '../controllers/RatingsController';

const ratingsRouter = Router();

const ratingsController = new RatingsController();

// GET: baseURL/ratings
/**
 * Show all ratings.
 */
ratingsRouter.get('/', ensureAuthenticated, ratingsController.index);

// GET: baseURL/ratings/:rating_id
/**
 * Show specific rating.
 */
ratingsRouter.get(
  '/:rating_id',
  celebrate({
    [Segments.PARAMS]: {
      rating_id: Joi.string().uuid().required(),
    },
  }),
  ensureAuthenticated,
  ratingsController.show,
);

// POST: baseURL/ratings
/**
 * Register rating.
 */
ratingsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
    },
  }),
  ensureAuthenticated,
  ratingsController.create,
);

// PUT: baseURL/ratings/:rating_id
/**
 * Update Rating.
 */
ratingsRouter.put(
  '/:rating_id',
  celebrate({
    [Segments.PARAMS]: {
      rating_id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      value: Joi.number().required(),
    },
  }),
  ensureAuthenticated,
  ratingsController.update,
);

// DELETE: baseURL/ratings/:rating_id
/**
 * Delete Rating.
 */
ratingsRouter.delete(
  '/:rating_id',
  celebrate({
    [Segments.PARAMS]: {
      rating_id: Joi.string().uuid().required(),
    },
  }),
  ensureAuthenticated,
  ratingsController.destroy,
);

export default ratingsRouter;

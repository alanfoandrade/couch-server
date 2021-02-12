import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import RatingsController from '../controllers/RatingsController';

const ratingsRouter = Router();

const ratingsController = new RatingsController();

// GET: baseURL/ratings
/**
 * Show all ratings.
 */
ratingsRouter.get('/', ratingsController.index);

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
      couch_id: Joi.string().uuid().required(),
      rating: Joi.number().integer().required(),
    },
  }),
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
      couch_id: Joi.string().uuid().required(),
      rating: Joi.number().integer().required(),
    },
  }),
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
  ratingsController.destroy,
);

export default ratingsRouter;

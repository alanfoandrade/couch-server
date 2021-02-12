import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import ListRatingsService from '@modules/ratings/services/ListRatingsService';
import FindRatingsService from '@modules/ratings/services/FindRatingsService';
import CreateRatingsService from '@modules/ratings/services/CreateRatingsService';
import UpdateRatingsService from '@modules/ratings/services/UpdateRatingsService';
import DeleteRatingsService from '@modules/ratings/services/DeleteRatingsService';

export default class RatingsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listRating = container.resolve(ListRatingsService);

    const ratings = await listRating.execute();

    return response.json(classToClass(ratings));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { rating_id } = request.params;

    const findRating = container.resolve(FindRatingsService);

    const rating = await findRating.execute(rating_id);

    return response.json(classToClass(rating));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { user } = request;
    const { couch_id, rating } = request.body;

    const createRating = container.resolve(CreateRatingsService);

    const newRating = await createRating.execute({
      user_id: user.id,
      couch_id,
      rating,
    });

    return response.json(classToClass(newRating));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { rating_id } = request.params;
    const { user } = request;
    const { couch_id, rating } = request.body;

    const updateRating = container.resolve(UpdateRatingsService);

    const updatedRating = await updateRating.execute({
      user_id: user.id,
      rating_id,
      couch_id,
      rating,
    });

    return response.json(classToClass(updatedRating));
  }

  public async destroy(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { rating_id } = request.params;

    const deleteRating = container.resolve(DeleteRatingsService);

    await deleteRating.execute(rating_id);

    return response.json({ message: 'Rating sucessfully deleted.' });
  }
}

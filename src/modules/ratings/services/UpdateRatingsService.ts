import { inject, injectable } from 'tsyringe';

import Rating from '@modules/ratings/infra/typeorm/entities/Rating';
import AppError from '@shared/errors/AppError';
import IRatingsRepository from '../repositories/IRatingsRepository';

interface IRequest {
  user_id: string;
  rating_id: string;
  couch_id: string;
  rating: number;
}

@injectable()
class CreateRatingsService {
  constructor(
    @inject('RatingsRepository')
    private ratingsRepository: IRatingsRepository,
  ) {}

  public async execute({ rating_id, ...rest }: IRequest): Promise<Rating> {
    const rating = await this.ratingsRepository.findById(rating_id);

    if (!rating) {
      throw new AppError('Rating not found');
    }

    const updatedRating = await this.ratingsRepository.save({
      ...rating,
      ...rest,
    });

    return updatedRating;
  }
}

export default CreateRatingsService;

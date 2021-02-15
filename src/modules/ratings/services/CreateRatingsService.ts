import { inject, injectable } from 'tsyringe';

import Rating from '@modules/ratings/infra/typeorm/entities/Rating';
import IRatingsRepository from '../repositories/IRatingsRepository';

interface IRequest {
  user_id: string;
  couch_id: string;
  rating: number;
}

@injectable()
class CreateRatingsService {
  constructor(
    @inject('RatingsRepository')
    private ratingsRepository: IRatingsRepository,
  ) {}

  public async execute({
    couch_id,
    user_id,
    rating,
  }: IRequest): Promise<Rating> {
    const newRating = await this.ratingsRepository.create({
      couch_id,
      user_id,
      rating,
    });

    return newRating;
  }
}

export default CreateRatingsService;

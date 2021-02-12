import { inject, injectable } from 'tsyringe';

import Rating from '@modules/ratings/infra/typeorm/entities/Rating';
import AppError from '@shared/errors/AppError';
import IRatingsRepository from '../repositories/IRatingsRepository';

interface IRequest {
  rating_id: string;
  latitude: number;
  longitude: number;
}

@injectable()
class CreateRatingsService {
  constructor(
    @inject('RatingsRepository')
    private ratingsRepository: IRatingsRepository,
  ) {}

  public async execute({
    rating_id,
    latitude,
    longitude,
  }: IRequest): Promise<Rating> {
    const rating = await this.ratingsRepository.findById(rating_id);

    if (!rating) {
      throw new AppError('Rating not found');
    }

    rating.value = latitude * longitude * 100;

    return rating;
  }
}

export default CreateRatingsService;

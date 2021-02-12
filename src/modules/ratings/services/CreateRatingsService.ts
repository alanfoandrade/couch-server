import { inject, injectable } from 'tsyringe';

import Rating from '@modules/ratings/infra/typeorm/entities/Rating';
import IRatingsRepository from '../repositories/IRatingsRepository';

interface IRequest {
  latitude: number;
  longitude: number;
}

@injectable()
class CreateRatingsService {
  constructor(
    @inject('RatingsRepository')
    private ratingsRepository: IRatingsRepository,
  ) {}

  public async execute({ latitude, longitude }: IRequest): Promise<Rating> {
    const rating = await this.ratingsRepository.create({
      value: latitude * longitude * 1000,
    });

    return rating;
  }
}

export default CreateRatingsService;

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

  public async execute(data: IRequest): Promise<Rating> {
    const rating = await this.ratingsRepository.create(data);

    return rating;
  }
}

export default CreateRatingsService;

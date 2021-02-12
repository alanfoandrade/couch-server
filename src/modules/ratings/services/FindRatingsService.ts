import { injectable, inject } from 'tsyringe';

import Rating from '@modules/ratings/infra/typeorm/entities/Rating';
import IRatingsRepository from '@modules/ratings/repositories/IRatingsRepository';

@injectable()
class ListRatingsService {
  constructor(
    @inject('RatingsRepository')
    private ratingsRepository: IRatingsRepository,
  ) {}

  public async execute(rating_id: string): Promise<Rating | undefined> {
    const rating = await this.ratingsRepository.findById(rating_id);

    return rating;
  }
}

export default ListRatingsService;

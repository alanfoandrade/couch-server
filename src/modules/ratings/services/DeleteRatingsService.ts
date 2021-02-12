import { injectable, inject } from 'tsyringe';

import IRatingsRepository from '@modules/ratings/repositories/IRatingsRepository';

@injectable()
class ListRatingsService {
  constructor(
    @inject('RatingsRepository')
    private ratingsRepository: IRatingsRepository,
  ) {}

  public async execute(rating_id: string): Promise<void> {
    return this.ratingsRepository.delete(rating_id);
  }
}

export default ListRatingsService;

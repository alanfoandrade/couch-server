import { EntityRepository, getRepository, Repository } from 'typeorm';

import IRatingsRepository from '@modules/ratings/repositories/IRatingsRepository';
import ICreateRatingDTO from '@modules/ratings/dtos/ICreateRatingDTO';

import Rating from '@modules/ratings/infra/typeorm/entities/Rating';

@EntityRepository(Rating)
class RatingsRepository implements IRatingsRepository {
  private ormRepository: Repository<Rating>;

  constructor() {
    this.ormRepository = getRepository(Rating);
  }

  public async findAll(): Promise<Rating[]> {
    const ratings = await this.ormRepository.find();

    return ratings;
  }

  public async findById(rating_id: string): Promise<Rating | undefined> {
    const rating = this.ormRepository.findOne(rating_id);

    return rating;
  }

  public async create(data: ICreateRatingDTO): Promise<Rating> {
    const rating = this.ormRepository.create(data);

    await this.ormRepository.save(rating);

    return rating;
  }

  public async save(rating: Rating): Promise<Rating> {
    return this.ormRepository.save(rating);
  }

  public async delete(rating_id: string): Promise<void> {
    await this.ormRepository.delete(rating_id);
  }
}

export default RatingsRepository;

import Rating from '../infra/typeorm/entities/Rating';
import ICreateRatingDTO from '../dtos/ICreateRatingDTO';

export default interface IRatingsRepository {
  create(data: ICreateRatingDTO): Promise<Rating>;
  findAll(): Promise<Rating[]>;
  findById(rating_id: string): Promise<Rating | undefined>;
  save(rating: Rating): Promise<Rating>;
  delete(rating_id: string): Promise<void>;
}

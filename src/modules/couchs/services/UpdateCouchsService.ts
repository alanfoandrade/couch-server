import { inject, injectable } from 'tsyringe';

import Couch from '@modules/couchs/infra/typeorm/entities/Couch';
import AppError from '@shared/errors/AppError';
import ICouchsRepository from '../repositories/ICouchsRepository';

interface IRequest {
  couch_id: string;
  latitude: number;
  longitude: number;
}

@injectable()
class CreateCouchsService {
  constructor(
    @inject('CouchsRepository')
    private couchsRepository: ICouchsRepository,
  ) {}

  public async execute({
    couch_id,
    latitude,
    longitude,
  }: IRequest): Promise<Couch> {
    const couch = await this.couchsRepository.findById(couch_id);

    if (!couch) {
      throw new AppError('Couch not found');
    }

    couch.value = latitude * longitude * 100;

    return couch;
  }
}

export default CreateCouchsService;

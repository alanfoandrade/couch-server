import { inject, injectable } from 'tsyringe';

import Couch from '@modules/couchs/infra/typeorm/entities/Couch';
import ICouchsRepository from '../repositories/ICouchsRepository';

interface IRequest {
  latitude: number;
  longitude: number;
}

@injectable()
class CreateCouchsService {
  constructor(
    @inject('CouchsRepository')
    private couchsRepository: ICouchsRepository,
  ) {}

  public async execute({ latitude, longitude }: IRequest): Promise<Couch> {
    const couch = await this.couchsRepository.create({
      value: latitude * longitude * 1000,
    });

    return couch;
  }
}

export default CreateCouchsService;

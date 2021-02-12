import { inject, injectable } from 'tsyringe';

import Couch from '@modules/couchs/infra/typeorm/entities/Couch';
import ICouchsRepository from '../repositories/ICouchsRepository';

interface IRequest {
  model: string;
  seaters: number;
  length: number;
  height: number;
  width: number;
}

@injectable()
class CreateCouchsService {
  constructor(
    @inject('CouchsRepository')
    private couchsRepository: ICouchsRepository,
  ) {}

  public async execute(data: IRequest): Promise<Couch> {
    const couch = await this.couchsRepository.create(data);

    return couch;
  }
}

export default CreateCouchsService;

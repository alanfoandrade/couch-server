import { injectable, inject } from 'tsyringe';

import Couch from '@modules/couchs/infra/typeorm/entities/Couch';
import ICouchsRepository from '@modules/couchs/repositories/ICouchsRepository';

@injectable()
class ListCouchsService {
  constructor(
    @inject('CouchsRepository')
    private couchsRepository: ICouchsRepository,
  ) {}

  public async execute(): Promise<Couch[]> {
    const couchs = await this.couchsRepository.findAll();

    return couchs;
  }
}

export default ListCouchsService;

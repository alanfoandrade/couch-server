import { injectable, inject } from 'tsyringe';

import Couch from '@modules/couchs/infra/typeorm/entities/Couch';
import ICouchsRepository from '@modules/couchs/repositories/ICouchsRepository';

@injectable()
class ListCouchsService {
  constructor(
    @inject('CouchsRepository')
    private couchsRepository: ICouchsRepository,
  ) {}

  public async execute(couch_id: string): Promise<Couch | undefined> {
    const couch = await this.couchsRepository.findById(couch_id);

    return couch;
  }
}

export default ListCouchsService;

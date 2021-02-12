import { injectable, inject } from 'tsyringe';

import ICouchsRepository from '@modules/couchs/repositories/ICouchsRepository';

@injectable()
class ListCouchsService {
  constructor(
    @inject('CouchsRepository')
    private couchsRepository: ICouchsRepository,
  ) {}

  public async execute(couch_id: string): Promise<void> {
    return this.couchsRepository.delete(couch_id);
  }
}

export default ListCouchsService;

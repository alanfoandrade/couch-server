import { EntityRepository, getRepository, Repository } from 'typeorm';

import ICouchsRepository from '@modules/couchs/repositories/ICouchsRepository';
import ICreateCouchDTO from '@modules/couchs/dtos/ICreateCouchDTO';

import Couch from '@modules/couchs/infra/typeorm/entities/Couch';

@EntityRepository(Couch)
class CouchsRepository implements ICouchsRepository {
  private ormRepository: Repository<Couch>;

  constructor() {
    this.ormRepository = getRepository(Couch);
  }

  public async findAll(): Promise<Couch[]> {
    const couchs = await this.ormRepository.find();

    return couchs;
  }

  public async findById(couch_id: string): Promise<Couch | undefined> {
    const couch = this.ormRepository.findOne(couch_id);

    return couch;
  }

  public async create(data: ICreateCouchDTO): Promise<Couch> {
    const couch = this.ormRepository.create(data);

    await this.ormRepository.save(couch);

    return couch;
  }

  public async save(couch: Couch): Promise<Couch> {
    return this.ormRepository.save(couch);
  }

  public async delete(couch_id: string): Promise<void> {
    await this.ormRepository.delete(couch_id);
  }
}

export default CouchsRepository;

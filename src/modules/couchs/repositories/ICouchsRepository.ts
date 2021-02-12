import Couch from '../infra/typeorm/entities/Couch';
import ICreateCouchDTO from '../dtos/ICreateCouchDTO';

export default interface ICouchsRepository {
  create(data: ICreateCouchDTO): Promise<Couch>;
  findAll(): Promise<Couch[]>;
  findById(couch_id: string): Promise<Couch | undefined>;
  save(couch: Couch): Promise<Couch>;
  delete(couch_id: string): Promise<void>;
}

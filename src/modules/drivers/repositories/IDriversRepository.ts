import Driver from '../infra/typeorm/entities/Driver';
import ICreateDriverDTO from '../dtos/ICreateDriverDTO';

export default interface IDriversRepository {
  create(data: ICreateDriverDTO): Promise<Driver>;
  findAll(): Promise<Driver[]>;
  findById(charge_id: string): Promise<Driver | undefined>;
  save(charge: Driver): Promise<Driver>;
  delete(charge_id: string): Promise<void>;
}

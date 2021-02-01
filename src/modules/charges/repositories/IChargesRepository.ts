import Charge from '../infra/typeorm/entities/Charge';
import ICreateChargeDTO from '../dtos/ICreateChargeDTO';

export default interface IChargesRepository {
  create(data: ICreateChargeDTO): Promise<Charge>;
  findAll(): Promise<Charge[]>;
  findById(charge_id: string): Promise<Charge | undefined>;
  save(charge: Charge): Promise<Charge>;
  delete(charge_id: string): Promise<void>;
}

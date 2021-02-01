import { EntityRepository, getRepository, Repository } from 'typeorm';

import IChargesRepository from '@modules/charges/repositories/IChargesRepository';
import ICreateChargeDTO from '@modules/charges/dtos/ICreateChargeDTO';

import Charge from '@modules/charges/infra/typeorm/entities/Charge';

@EntityRepository(Charge)
class ChargesRepository implements IChargesRepository {
  private ormRepository: Repository<Charge>;

  constructor() {
    this.ormRepository = getRepository(Charge);
  }

  public async findAll(): Promise<Charge[]> {
    const charges = await this.ormRepository.find();

    return charges;
  }

  public async findById(charge_id: string): Promise<Charge | undefined> {
    const charge = this.ormRepository.findOne(charge_id);

    return charge;
  }

  public async create(data: ICreateChargeDTO): Promise<Charge> {
    const charge = this.ormRepository.create(data);

    await this.ormRepository.save(charge);

    return charge;
  }

  public async save(charge: Charge): Promise<Charge> {
    return this.ormRepository.save(charge);
  }

  public async delete(charge_id: string): Promise<void> {
    await this.ormRepository.delete(charge_id);
  }
}

export default ChargesRepository;

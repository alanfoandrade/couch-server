import Charge from '@modules/charges/infra/typeorm/entities/Charge';
import { v4 as uuid } from 'uuid';

import ICreateChargeDTO from '@modules/charges/dtos/ICreateChargeDTO';
import IChargesRepository from '../IChargesRepository';

class FakeChargesRepository implements IChargesRepository {
  private charges: Charge[] = [];

  public async create({ value }: ICreateChargeDTO): Promise<Charge> {
    const charge = new Charge();

    Object.assign(charge, {
      id: uuid(),
      value,
    });

    this.charges.push(charge);

    return charge;
  }

  public async findAll(): Promise<Charge[]> {
    const { charges } = this;

    return charges;
  }

  public async findById(charge_id: string): Promise<Charge | undefined> {
    const charge = this.charges.find(
      (findCharge) => findCharge.id === charge_id,
    );

    return charge;
  }

  public async save(charge: Charge): Promise<Charge> {
    const findIndex = this.charges.findIndex(
      (findCharge) => findCharge.id === charge.id,
    );

    this.charges[findIndex] = charge;

    return charge;
  }

  public async delete(charge_id: string): Promise<void> {
    const findIndex = this.charges.findIndex(
      (charge) => charge.id === charge_id,
    );

    this.charges.splice(findIndex, 1);
  }
}

export default FakeChargesRepository;

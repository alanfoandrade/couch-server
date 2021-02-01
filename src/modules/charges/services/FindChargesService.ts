import { injectable, inject } from 'tsyringe';

import Charge from '@modules/charges/infra/typeorm/entities/Charge';
import IChargesRepository from '@modules/charges/repositories/IChargesRepository';

@injectable()
class ListChargesService {
  constructor(
    @inject('ChargesRepository')
    private chargesRepository: IChargesRepository,
  ) {}

  public async execute(charge_id: string): Promise<Charge | undefined> {
    const charge = await this.chargesRepository.findById(charge_id);

    return charge;
  }
}

export default ListChargesService;

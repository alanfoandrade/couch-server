import { injectable, inject } from 'tsyringe';

import Charge from '@modules/charges/infra/typeorm/entities/Charge';
import IChargesRepository from '@modules/charges/repositories/IChargesRepository';

@injectable()
class ListChargesService {
  constructor(
    @inject('ChargesRepository')
    private chargesRepository: IChargesRepository,
  ) {}

  public async execute(): Promise<Charge[]> {
    const charges = await this.chargesRepository.findAll();

    return charges;
  }
}

export default ListChargesService;

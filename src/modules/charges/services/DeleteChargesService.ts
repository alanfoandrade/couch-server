import { injectable, inject } from 'tsyringe';

import IChargesRepository from '@modules/charges/repositories/IChargesRepository';

@injectable()
class ListChargesService {
  constructor(
    @inject('ChargesRepository')
    private chargesRepository: IChargesRepository,
  ) {}

  public async execute(charge_id: string): Promise<void> {
    return this.chargesRepository.delete(charge_id);
  }
}

export default ListChargesService;

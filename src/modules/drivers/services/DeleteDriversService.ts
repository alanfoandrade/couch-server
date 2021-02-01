import { injectable, inject } from 'tsyringe';

import IDriversRepository from '@modules/drivers/repositories/IDriversRepository';

@injectable()
class DeleteDriversService {
  constructor(
    @inject('DriversRepository')
    private driversRepository: IDriversRepository,
  ) {}

  public async execute(driver_id: string): Promise<void> {
    return this.driversRepository.delete(driver_id);
  }
}

export default DeleteDriversService;

import { injectable, inject } from 'tsyringe';

import Driver from '@modules/drivers/infra/typeorm/entities/Driver';
import IDriversRepository from '@modules/drivers/repositories/IDriversRepository';

@injectable()
class FindDriversService {
  constructor(
    @inject('DriversRepository')
    private driversRepository: IDriversRepository,
  ) {}

  public async execute(driver_id: string): Promise<Driver | undefined> {
    const driver = await this.driversRepository.findById(driver_id);

    return driver;
  }
}

export default FindDriversService;

import { injectable, inject } from 'tsyringe';

import Driver from '@modules/drivers/infra/typeorm/entities/Driver';
import IDriversRepository from '@modules/drivers/repositories/IDriversRepository';

@injectable()
class ListDriversService {
  constructor(
    @inject('DriversRepository')
    private driversRepository: IDriversRepository,
  ) {}

  public async execute(): Promise<Driver[]> {
    const drivers = await this.driversRepository.findAll();

    return drivers;
  }
}

export default ListDriversService;

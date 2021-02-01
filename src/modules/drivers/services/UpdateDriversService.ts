import { inject, injectable } from 'tsyringe';

import Driver from '@modules/drivers/infra/typeorm/entities/Driver';
import AppError from '@shared/errors/AppError';
import IDriversRepository from '../repositories/IDriversRepository';

interface IRequest {
  driver_id: string;
  name: string;
}

@injectable()
class UpdateDriversService {
  constructor(
    @inject('DriversRepository')
    private driversRepository: IDriversRepository,
  ) {}

  public async execute({ driver_id, name }: IRequest): Promise<Driver> {
    const driver = await this.driversRepository.findById(driver_id);

    if (!driver) {
      throw new AppError('Driver not found');
    }

    driver.name = name;

    return driver;
  }
}

export default UpdateDriversService;

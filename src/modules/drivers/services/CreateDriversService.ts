import { inject, injectable } from 'tsyringe';

import Driver from '@modules/drivers/infra/typeorm/entities/Driver';
import IDriversRepository from '../repositories/IDriversRepository';

interface IRequest {
  name: string;
}

@injectable()
class CreateDriversService {
  constructor(
    @inject('DriversRepository')
    private driversRepository: IDriversRepository,
  ) {}

  public async execute({ name }: IRequest): Promise<Driver> {
    const driver = await this.driversRepository.create({
      name,
    });

    return driver;
  }
}

export default CreateDriversService;

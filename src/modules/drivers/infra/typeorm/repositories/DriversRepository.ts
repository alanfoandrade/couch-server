import { EntityRepository, getRepository, Repository } from 'typeorm';

import IDriversRepository from '@modules/drivers/repositories/IDriversRepository';
import ICreateDriverDTO from '@modules/drivers/dtos/ICreateDriverDTO';

import Driver from '@modules/drivers/infra/typeorm/entities/Driver';

@EntityRepository(Driver)
class DriversRepository implements IDriversRepository {
  private ormRepository: Repository<Driver>;

  constructor() {
    this.ormRepository = getRepository(Driver);
  }

  public async findAll(): Promise<Driver[]> {
    const drivers = await this.ormRepository.find();

    return drivers;
  }

  public async findById(driver_id: string): Promise<Driver | undefined> {
    const driver = this.ormRepository.findOne(driver_id);

    return driver;
  }

  public async create(data: ICreateDriverDTO): Promise<Driver> {
    const driver = this.ormRepository.create(data);

    await this.ormRepository.save(driver);

    return driver;
  }

  public async save(driver: Driver): Promise<Driver> {
    return this.ormRepository.save(driver);
  }

  public async delete(driver_id: string): Promise<void> {
    await this.ormRepository.delete(driver_id);
  }
}

export default DriversRepository;

import Driver from '@modules/drivers/infra/typeorm/entities/Driver';
import { v4 as uuid } from 'uuid';

import ICreateDriverDTO from '@modules/drivers/dtos/ICreateDriverDTO';
import IDriversRepository from '../IDriversRepository';

class FakeDriversRepository implements IDriversRepository {
  private drivers: Driver[] = [];

  public async create({ name }: ICreateDriverDTO): Promise<Driver> {
    const driver = new Driver();

    Object.assign(driver, {
      id: uuid(),
      name,
    });

    this.drivers.push(driver);

    return driver;
  }

  public async findAll(): Promise<Driver[]> {
    const { drivers } = this;

    return drivers;
  }

  public async findById(driver_id: string): Promise<Driver | undefined> {
    const driver = this.drivers.find(
      (findDriver) => findDriver.id === driver_id,
    );

    return driver;
  }

  public async save(driver: Driver): Promise<Driver> {
    const findIndex = this.drivers.findIndex(
      (findDriver) => findDriver.id === driver.id,
    );

    this.drivers[findIndex] = driver;

    return driver;
  }

  public async delete(driver_id: string): Promise<void> {
    const findIndex = this.drivers.findIndex(
      (driver) => driver.id === driver_id,
    );

    this.drivers.splice(findIndex, 1);
  }
}

export default FakeDriversRepository;

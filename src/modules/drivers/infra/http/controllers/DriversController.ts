import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import ListDriversService from '@modules/drivers/services/ListDriversService';
import FindDriversService from '@modules/drivers/services/FindDriversService';
import CreateDriversService from '@modules/drivers/services/CreateDriversService';
import UpdateDriversService from '@modules/drivers/services/UpdateDriversService';
import DeleteDriversService from '@modules/drivers/services/DeleteDriversService';

export default class DriversController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listDriver = container.resolve(ListDriversService);

    const drivers = await listDriver.execute();

    return response.json(classToClass(drivers));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { driver_id } = request.params;

    const findDriver = container.resolve(FindDriversService);

    const driver = await findDriver.execute(driver_id);

    return response.json(classToClass(driver));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createDriver = container.resolve(CreateDriversService);

    const driver = await createDriver.execute({ name });

    return response.json(classToClass(driver));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { driver_id } = request.params;
    const { name } = request.body;

    const updateDriver = container.resolve(UpdateDriversService);

    const driver = await updateDriver.execute({
      driver_id,
      name,
    });

    return response.json(classToClass(driver));
  }

  public async destroy(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { driver_id } = request.params;

    const deleteDriver = container.resolve(DeleteDriversService);

    await deleteDriver.execute(driver_id);

    return response.json({ message: 'Driver sucessfully deleted.' });
  }
}

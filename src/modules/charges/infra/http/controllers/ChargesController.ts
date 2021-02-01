import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import ListChargesService from '@modules/charges/services/ListChargesService';
import FindChargesService from '@modules/charges/services/FindChargesService';
import CreateChargesService from '@modules/charges/services/CreateChargesService';
import UpdateChargesService from '@modules/charges/services/UpdateChargesService';
import DeleteChargesService from '@modules/charges/services/DeleteChargesService';

export default class ChargesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listCharge = container.resolve(ListChargesService);

    const charges = await listCharge.execute();

    return response.json(classToClass(charges));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { charge_id } = request.params;

    const findCharge = container.resolve(FindChargesService);

    const charge = await findCharge.execute(charge_id);

    return response.json(classToClass(charge));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { latitude, longitude } = request.body;

    const createCharge = container.resolve(CreateChargesService);

    const charge = await createCharge.execute({ latitude, longitude });

    return response.json(classToClass(charge));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { charge_id } = request.params;
    const { latitude, longitude } = request.body;

    const updateCharge = container.resolve(UpdateChargesService);

    const charge = await updateCharge.execute({
      charge_id,
      latitude,
      longitude,
    });

    return response.json(classToClass(charge));
  }

  public async destroy(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { charge_id } = request.params;

    const deleteCharge = container.resolve(DeleteChargesService);

    await deleteCharge.execute(charge_id);

    return response.json({ message: 'Charge sucessfully deleted.' });
  }
}

import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import ListCouchsService from '@modules/couchs/services/ListCouchsService';
import FindCouchsService from '@modules/couchs/services/FindCouchsService';
import CreateCouchsService from '@modules/couchs/services/CreateCouchsService';
import UpdateCouchsService from '@modules/couchs/services/UpdateCouchsService';
import DeleteCouchsService from '@modules/couchs/services/DeleteCouchsService';

export default class CouchsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listCouch = container.resolve(ListCouchsService);

    const couchs = await listCouch.execute();

    return response.json(classToClass(couchs));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { couch_id } = request.params;

    const findCouch = container.resolve(FindCouchsService);

    const couch = await findCouch.execute(couch_id);

    return response.json(classToClass(couch));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { latitude, longitude } = request.body;

    const createCouch = container.resolve(CreateCouchsService);

    const couch = await createCouch.execute({ latitude, longitude });

    return response.json(classToClass(couch));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { couch_id } = request.params;
    const { latitude, longitude } = request.body;

    const updateCouch = container.resolve(UpdateCouchsService);

    const couch = await updateCouch.execute({
      couch_id,
      latitude,
      longitude,
    });

    return response.json(classToClass(couch));
  }

  public async destroy(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { couch_id } = request.params;

    const deleteCouch = container.resolve(DeleteCouchsService);

    await deleteCouch.execute(couch_id);

    return response.json({ message: 'Couch sucessfully deleted.' });
  }
}

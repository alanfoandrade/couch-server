import { inject, injectable } from 'tsyringe';

import Charge from '@modules/charges/infra/typeorm/entities/Charge';
import AppError from '@shared/errors/AppError';
import IChargesRepository from '../repositories/IChargesRepository';

interface IRequest {
  charge_id: string;
  latitude: number;
  longitude: number;
}

@injectable()
class CreateChargesService {
  constructor(
    @inject('ChargesRepository')
    private chargesRepository: IChargesRepository,
  ) {}

  public async execute({
    charge_id,
    latitude,
    longitude,
  }: IRequest): Promise<Charge> {
    const charge = await this.chargesRepository.findById(charge_id);

    if (!charge) {
      throw new AppError('Charge not found');
    }

    charge.value = latitude * longitude * 100;

    return charge;
  }
}

export default CreateChargesService;

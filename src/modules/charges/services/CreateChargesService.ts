import { inject, injectable } from 'tsyringe';

import Charge from '@modules/charges/infra/typeorm/entities/Charge';
import IChargesRepository from '../repositories/IChargesRepository';

interface IRequest {
  latitude: number;
  longitude: number;
}

@injectable()
class CreateChargesService {
  constructor(
    @inject('ChargesRepository')
    private chargesRepository: IChargesRepository,
  ) {}

  public async execute({ latitude, longitude }: IRequest): Promise<Charge> {
    const charge = await this.chargesRepository.create({
      value: latitude * longitude * 1000,
    });

    return charge;
  }
}

export default CreateChargesService;

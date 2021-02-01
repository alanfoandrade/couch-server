import { container } from 'tsyringe';

import './providers';

import IChargesRepository from '@modules/charges/repositories/IChargesRepository';
import ChargesRepository from '@modules/charges/infra/typeorm/repositories/ChargesRepository';

import IDriversRepository from '@modules/drivers/repositories/IDriversRepository';
import DriversRepository from '@modules/drivers/infra/typeorm/repositories/DriversRepository';

container.registerSingleton<IChargesRepository>(
  'ChargesRepository',
  ChargesRepository,
);

container.registerSingleton<IDriversRepository>(
  'DriversRepository',
  DriversRepository,
);

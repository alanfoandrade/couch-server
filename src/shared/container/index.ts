import { container } from 'tsyringe';

import './providers';

import ICouchsRepository from '@modules/couchs/repositories/ICouchsRepository';
import CouchsRepository from '@modules/couchs/infra/typeorm/repositories/CouchsRepository';

container.registerSingleton<ICouchsRepository>(
  'CouchsRepository',
  CouchsRepository,
);

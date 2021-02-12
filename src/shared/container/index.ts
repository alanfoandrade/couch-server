import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';

import ICouchsRepository from '@modules/couchs/repositories/ICouchsRepository';
import CouchsRepository from '@modules/couchs/infra/typeorm/repositories/CouchsRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IRatingsRepository from '@modules/ratings/repositories/IRatingsRepository';
import RatingsRepository from '@modules/ratings/infra/typeorm/repositories/RatingsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<ICouchsRepository>(
  'CouchsRepository',
  CouchsRepository,
);

container.registerSingleton<IRatingsRepository>(
  'RatingsRepository',
  RatingsRepository,
);

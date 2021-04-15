import { Connection } from 'typeorm';
import { Category } from '../entities/category.entity';

export const categoryRepository = [
  {
    provide: 'CATEGORY_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Category),
    inject: ['DATABASE_CONNECTION'],
  },
];

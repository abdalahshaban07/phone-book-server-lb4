import {DefaultCrudRepository} from '@loopback/repository';
import {PhoneBookModel, PhoneBookModelRelations} from '../models';
import {MongoDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PhoneBookModelRepository extends DefaultCrudRepository<
  PhoneBookModel,
  typeof PhoneBookModel.prototype.id,
  PhoneBookModelRelations
> {
  constructor(
    @inject('datasources.mongoDB') dataSource: MongoDbDataSource,
  ) {
    super(PhoneBookModel, dataSource);
  }
}

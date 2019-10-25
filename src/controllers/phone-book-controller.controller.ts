import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import { PhoneBookModel } from '../models';
import { PhoneBookModelRepository } from '../repositories';

export class PhoneBookControllerController {
  constructor(
    @repository(PhoneBookModelRepository)
    public phoneBookModelRepository: PhoneBookModelRepository,
  ) { }

  @post('/phone-book-models', {
    responses: {
      '200': {
        description: 'PhoneBookModel model instance',
        content: { 'application/json': { schema: getModelSchemaRef(PhoneBookModel, { exclude: ['id'] }), } },
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PhoneBookModel, {
            title: 'NewPhoneBookModel',
            exclude: ['id']
          }),
        },
      },
    })
    phoneBookModel: PhoneBookModel,
  ): Promise<PhoneBookModel> {
    return this.phoneBookModelRepository.create(phoneBookModel);
  }

  @get('/phone-book-models/count', {
    responses: {
      '200': {
        description: 'PhoneBookModel model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(PhoneBookModel)) where?: Where<PhoneBookModel>,
  ): Promise<Count> {
    return this.phoneBookModelRepository.count(where);
  }

  @get('/phone-book-models', {
    responses: {
      '200': {
        description: 'Array of PhoneBookModel model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: getModelSchemaRef(PhoneBookModel, { exclude: ['id'] }) },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(PhoneBookModel)) filter?: Filter<PhoneBookModel>,
  ): Promise<PhoneBookModel[]> {
    return this.phoneBookModelRepository.find(filter);
  }

  @patch('/phone-book-models', {
    responses: {
      '200': {
        description: 'PhoneBookModel PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PhoneBookModel, { partial: true, exclude: ['id'] }),
        },
      },
    })
    phoneBookModel: PhoneBookModel,
    @param.query.object('where', getWhereSchemaFor(PhoneBookModel)) where?: Where<PhoneBookModel>,
  ): Promise<Count> {
    return this.phoneBookModelRepository.updateAll(phoneBookModel, where);
  }

  @get('/phone-book-models/{id}', {
    responses: {
      '200': {
        description: 'PhoneBookModel model instance',
        content: { 'application/json': { schema: getModelSchemaRef(PhoneBookModel, { exclude: ['id'] }) } },
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<PhoneBookModel> {
    return this.phoneBookModelRepository.findById(id);
  }

  @get('/phone-book-models/name/{name}', {
    responses: {
      '200': {
        description: 'PhoneBookModel model instance',
        content: { 'application/json': { schema: getModelSchemaRef(PhoneBookModel, { exclude: ['id'] }) } },
      },
    },
  })
  async findByName(@param.path.string('name') name: string): Promise<any> {
    return this.phoneBookModelRepository.findOne({ where: { name: name } });
  }

  @get('/phone-book-models/phone/{phoneNumber}', {
    responses: {
      '200': {
        description: 'PhoneBookModel model instance',
        content: { 'application/json': { schema: getModelSchemaRef(PhoneBookModel, { exclude: ['id'] }) } },
      },
    },
  })
  async checkExits(@param.path.number('phoneNumber') phoneNumber: number): Promise<any> {
    return this.phoneBookModelRepository.findOne({ where: { phoneNumber: phoneNumber } })
  }

  @patch('/phone-book-models/{id}', {
    responses: {
      '204': {
        description: 'PhoneBookModel PATCH success',
        content: { 'application/json': { schema: getModelSchemaRef(PhoneBookModel, { exclude: ['id'] }) } }
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PhoneBookModel, { partial: true, exclude: ['id'] }),
        },
      },
    })
    phoneBookModel: PhoneBookModel,
  ): Promise<void> {
    await this.phoneBookModelRepository.updateById(id, phoneBookModel);
  }

  @put('/phone-book-models/{id}', {
    responses: {
      '204': {
        description: 'PhoneBookModel PUT success',
        content: { 'application/json': { schema: getModelSchemaRef(PhoneBookModel, { exclude: ['id'] }) } }
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PhoneBookModel, { partial: true, exclude: ['id'] }),
        },
      },
    }) phoneBookModel: PhoneBookModel,
  ): Promise<void> {
    await this.phoneBookModelRepository.replaceById(id, phoneBookModel);
  }

  @del('/phone-book-models/{id}', {
    responses: {
      '204': {
        description: 'PhoneBookModel DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.phoneBookModelRepository.deleteById(id);
  }
}

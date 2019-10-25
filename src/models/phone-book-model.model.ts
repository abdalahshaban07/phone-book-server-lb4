import { Entity, model, property } from '@loopback/repository';

@model()
export class PhoneBookModel extends Entity {
  @property({
    type: 'string',
    id: true,
    required: false,
    generated: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {
      minLength: 3
    }
  })
  name: string;

  @property({
    type: 'number',
    required: true,
    uniqueItems: true
  })
  phoneNumber: number;




  constructor(data?: Partial<PhoneBookModel>) {
    super(data);
  }
}

export interface PhoneBookModelRelations {
  // describe navigational properties here
}

export type PhoneBookModelWithRelations = PhoneBookModel & PhoneBookModelRelations;

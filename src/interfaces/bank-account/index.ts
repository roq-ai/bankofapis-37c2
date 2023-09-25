import { GetQueryInterface } from 'interfaces';

export interface BankAccountInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface BankAccountGetQueryInterface extends GetQueryInterface {
  id?: string;
}

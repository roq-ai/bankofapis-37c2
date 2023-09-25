import { GetQueryInterface } from 'interfaces';

export interface AccountBalanceInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface AccountBalanceGetQueryInterface extends GetQueryInterface {
  id?: string;
}

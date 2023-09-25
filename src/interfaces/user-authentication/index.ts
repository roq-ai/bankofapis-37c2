import { GetQueryInterface } from 'interfaces';

export interface UserAuthenticationInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface UserAuthenticationGetQueryInterface extends GetQueryInterface {
  id?: string;
}

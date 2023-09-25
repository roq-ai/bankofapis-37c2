import axios from 'axios';
import queryString from 'query-string';
import { UserAuthenticationInterface, UserAuthenticationGetQueryInterface } from 'interfaces/user-authentication';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getUserAuthentications = async (
  query?: UserAuthenticationGetQueryInterface,
): Promise<PaginatedInterface<UserAuthenticationInterface>> => {
  const response = await axios.get('/api/user-authentications', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createUserAuthentication = async (userAuthentication: UserAuthenticationInterface) => {
  const response = await axios.post('/api/user-authentications', userAuthentication);
  return response.data;
};

export const updateUserAuthenticationById = async (id: string, userAuthentication: UserAuthenticationInterface) => {
  const response = await axios.put(`/api/user-authentications/${id}`, userAuthentication);
  return response.data;
};

export const getUserAuthenticationById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/user-authentications/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteUserAuthenticationById = async (id: string) => {
  const response = await axios.delete(`/api/user-authentications/${id}`);
  return response.data;
};

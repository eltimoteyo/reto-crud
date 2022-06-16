import { IUser } from './user.interface';

export interface IRetoCrudResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Array<IUser>;
}

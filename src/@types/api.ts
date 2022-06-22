import { TUser, TIngredient, TOrder } from './data';

export type TRequestOptions = {
  method: 'GET' | 'POST' | 'PATCH',
  headers: {
    'Content-Type': string,
    Authorization?: string
  },
  body?: string
}

export type TUserRes = {
  success: boolean,
  user: TUser
};

export type TAuthRes = {
  success: boolean,
  user: TUser,
  accessToken: string,
  refreshToken: string
};

export type TRefreshTokenRes = {
  success: boolean,
  accessToken: string,
  refreshToken: string
};

export type TIngredientsRes = {
  success: boolean,
  data: TIngredient[]
}

export type TCreateOrderRes = {
  success: boolean,
  name: string,
  order: {
    number: number
  }
};

export type TOrdersRes = {
  success: boolean;
  orders: TOrder[];
  total: number;
  totalToday: number;
};


export type TMessageRes = {
  success: boolean,
  message: string
};

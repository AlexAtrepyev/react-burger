export type TUser = {
  name: string;
  email: string;
};

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

export type TIngredient = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
  count: number;
  dragId?: string;
  index?: number;
};

export type TMoveCard = (dragIndex: number, hoverIndex: number) => void;

export type TCreateOrderRes = {
  success: boolean,
  name: string,
  order: {
    number: number
  }
};

export type TOrder = {
  _id: string;
  ingredients: string[];
  ingredientsDetails?: TIngredient[];
  status: 'created' | 'pending' | 'done';
  number: number;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type TOrdersRes = {
  success: boolean;
  orders: TOrder[];
  total: number;
  totalToday: number;
};

export type TForm = {
  name?: string;
  email?: string;
  password?: string;
  token?: string;
};

export type TMessageRes = {
  success: boolean,
  message: string
};

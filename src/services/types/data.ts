import {
  WS_CONNECTION_START,
  WS_CONNECTION_STOP,
  WS_CONNECTION_OPENED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE
} from '../constants';

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

export type TUser = {
  name: string;
  email: string;
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

export type TForm = {
  name?: string;
  email?: string;
  password?: string;
  token?: string;
};

export type TCreateOrderRes = {
  success: boolean,
  name: string,
  order: {
    number: number
  }
};

export type TMessageRes = {
  success: boolean,
  message: string
};

export type TAuthRes = {
  success: boolean,
  user: {
    email: string,
    name: string
  },
  accessToken: string,
  refreshToken: string
};

export type TGetNewTokenRes = {
  success: boolean,
  accessToken: string,
  refreshToken: string
};

export type TUserRes = {
  success: boolean,
  user: {
    email: string,
    name: string
  }
};

export type TWsActions = {
  wsStart: typeof WS_CONNECTION_START;
  wsStop: typeof WS_CONNECTION_STOP;
  onOpen: typeof WS_CONNECTION_OPENED;
  onError: typeof WS_CONNECTION_ERROR;
  onClose: typeof WS_CONNECTION_CLOSED;
  onMessage: typeof WS_GET_MESSAGE;
};

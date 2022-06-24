import { TOrdersRes } from '../../@types/api';
import { TOrderDetailsText, TIngredient, TOrder } from '../../@types/data';

export const API_URL: string = 'https://norma.nomoreparties.space/api';

export const ORDER_DETAILS_TEXT: TOrderDetailsText = {
  status: {
    loading: 'Ваш заказ оформляется',
    done: 'Ваш заказ начали готовить'
  },
  message: {
    loading: 'Дождитесь оформления',
    done: 'Дождитесь готовности на орбитальной станции'
  }
};

export const MAX_CARD_LOGO_COUNT: number = 6;

export const MAX_ORDER_BOARD_CARD_COUNT: number = 20;

export const MONTH_DICT: { [key: number]: string } = {
  0: 'января',
  1: 'февраля',
  2: 'марта',
  3: 'апреля',
  4: 'мая',
  5: 'июня',
  6: 'июля',
  7: 'августа',
  8: 'сентября',
  9: 'октября',
  10: 'ноября',
  11: 'декабря'
};

export const testIngredient: TIngredient = {
  _id: 'test _id',
  name: 'test name',
  type: 'test type',
  proteins: 0,
  fat: 0,
  carbohydrates: 0,
  calories: 0,
  price: 0,
  image: 'test image',
  image_mobile: 'test image_mobile',
  image_large: 'test image_large',
  __v: 0,
  count: 0,
  dragId: 'test dragId'
};

const testOrder: TOrder = {
  _id: 'test _id',
  ingredients: ['test id', 'test id'],
  status: 'done',
  number: 0,
  name: 'test name',
  createdAt: 'test createdAt',
  updatedAt: 'test updatedAt'
};

export const testOrdersRes: TOrdersRes = {
  success: true,
  orders: [testOrder, testOrder],
  total: 0,
  totalToday: 0
};

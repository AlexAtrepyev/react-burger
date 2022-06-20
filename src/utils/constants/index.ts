import { TOrderDetailsText } from '../../@types/data';

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

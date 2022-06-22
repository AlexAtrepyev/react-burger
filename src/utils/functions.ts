import { SyntheticEvent, RefObject } from 'react';

import { TIngredient, TOrder } from '../@types/data';

import { MONTH_DICT } from './constants';

export function getNearestRef(container: SyntheticEvent['currentTarget'], refs: RefObject<HTMLHeadingElement>[]): any {
  const aim = container.getBoundingClientRect().top;
  let minDistance = Number.MAX_VALUE;
  let nearestRef = null;
  refs.forEach(ref => {
    const top = ref.current ? ref.current.getBoundingClientRect().top : 0;
    const distance = Math.abs(aim - top);
    if (distance < minDistance) {
      minDistance = distance;
      nearestRef = ref;
    }
  });
  return nearestRef;
}

export const filterIngredients = (ingredients: TIngredient[], type: 'bun' | 'sauce' | 'main'): TIngredient[] => {
  return ingredients.filter(ingredient => ingredient.type === type);
}

export function getTotalPrice(items: TIngredient[]): number {
  return items.reduce((sum, item) => {
    return sum + item.price;
  }, 0);
}

export function getIDs(items: TIngredient[]): string[] {
  return items.map(item => item._id);
}

export function setCookie(name: string, value: string, props: any = {}): void {
  props = {
    ...props,
    path: '/'
  };
  
  let exp = props.expires;
  if (typeof exp == 'number' && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }
  if (exp && exp.toUTCString) {
    props.expires = exp.toUTCString();
  }
  value = encodeURIComponent(value);
  let updatedCookie = name + '=' + value;
  for (const propName in props) {
    updatedCookie += '; ' + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += '=' + propValue;
    }
  }
  document.cookie = updatedCookie;
}

export function getCookie(name: string): string | undefined {
  const matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function getCountedArray(array: string[]): { name: string, count: number }[] {
  const dict = array.reduce((dict: { [key: string]: number }, element) => {
    dict[element] = (dict[element] || 0) + 1;
    return dict;
  }, {});

  return Object.entries(dict).map(entry => {
    return { name: entry[0], count: entry[1] };
  });
}

export function getIngredientsDetails(initialIngredients: TIngredient[], ids: string[]): TIngredient[] {
  const filteredIngredients: TIngredient[] = [];
  
  getCountedArray(ids).forEach(id => {
    const filteredIngredient = initialIngredients.find(initialIngredient => initialIngredient._id === id.name);
    filteredIngredient && filteredIngredients.push({ ...filteredIngredient, count: id.count });
  });

  return filteredIngredients;
}

export function getOrderPrice(items: TIngredient[]): number {
  return items.reduce((sum, item) => {
    return sum + item.price * item.count;
  }, 0);
}

export function getOrderNumbers(items: TOrder[]): number[] {
  return items.map(item => item.number);
}

function parseTime(time: number) {
  const stringTime = time.toString();
  return stringTime.length === 1 ? `0${stringTime}` : stringTime;
}

export function parseOrderDate(orderDate: string): string {
  const date = new Date(orderDate);
  return `${date.getDate()} ${MONTH_DICT[date.getMonth()]}, ${parseTime(date.getHours())}:${parseTime(date.getMinutes())}`;
}

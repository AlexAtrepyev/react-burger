import { SyntheticEvent, RefObject } from 'react';

import { TIngredient } from '../types';

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

export function filterIngredients(ingredients: TIngredient[], type: 'bun' | 'sauce' | 'main'): TIngredient[] {
  if (ingredients.length) {
    return ingredients.filter(ingredient => ingredient.type === type);
  } else {
    return [];
  }
}

export function getTotalPrice(items: TIngredient[]): number {
  return items.reduce((sum, item) => {
    return sum + item.price;
  }, 0);
}

export function getIDs(items: TIngredient[]): string[] {
  return items.map(item => item._id);
}

export function setCookie(name: string, value: string, props: any): void {
  props = props || {};
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

export function getNearestRef(container, refs) {
  const aim = container.getBoundingClientRect().top;
  let minDistance = Number.MAX_VALUE;
  let nearestRef = null;
  refs.forEach(ref => {
    const distance = Math.abs(aim - ref.current.getBoundingClientRect().top);
    if (distance < minDistance) {
      minDistance = distance;
      nearestRef = ref;
    }
  });
  return nearestRef;
}

export function filterIngredients(ingredients, type) {
  if (ingredients.length) {
    return ingredients.filter(ingredient => ingredient.type === type);
  } else {
    return [];
  }
}

export function getTotalPrice(items) {
  return items.reduce((sum, item) => {
    return sum + item.price;
  }, 0);
}

export function getIDs(items) {
  return items.map(item => item._id);
}

export function setCookie(name, value, props) {
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

export function getCookie(name) {
  const matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

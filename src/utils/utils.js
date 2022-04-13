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

export const BASE_URL = 'https://norma.nomoreparties.space/api/ingredients';

export function clusterData(data) {
  if (data) {
    return {
      bun: data.filter(item => item.type === 'bun'),
      main: data.filter(item => item.type === 'main'),
      sauce: data.filter(item => item.type === 'sauce')
    }
  } else {
    return {
      bun: [],
      main: [],
      sauce: []
    }
  }
}

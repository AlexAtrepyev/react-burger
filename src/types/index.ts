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

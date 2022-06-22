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

export type TForm = {
  name?: string;
  email?: string;
  password?: string;
  token?: string;
};

export type TOrderDetailsText = {
  status: {
    loading: string,
    done: string
  },
  message: {
    loading: string,
    done: string
  }
};

export type TMoveCard = (dragIndex: number, hoverIndex: number) => void;

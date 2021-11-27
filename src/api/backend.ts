import axios from 'axios';

export const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:3030',
});

export type OptionsType = 'scoops' | 'toppings';

export interface ProductItem {
  name: string;
  imagePath: string;
}

export const getOptions = (optionType: OptionsType) =>
  instance.get<ProductItem[]>(`/${optionType}`);

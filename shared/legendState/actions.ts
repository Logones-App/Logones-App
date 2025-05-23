// Actions Legend-State équivalentes à Redux
import { dbState } from './store';

export function setTheme(value: any) {
  dbState.theme.set(value);
}

export function addToCart(id: string) {
  if (!dbState.cart.peek()) dbState.cart.set([]);
  dbState.cart.set((prev) => [...prev, id]);
}

export function setProductData(data: any) {
  dbState.product.set(data);
}

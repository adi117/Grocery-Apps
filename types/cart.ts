import { Product } from "./product";

export interface CartItem {
  id: number
  productID: Product;
  quantity: number;
}

export interface ShoppingCart {
  items: CartItem[];
  addItem(product: Product, quantity: number): void;
  removeItem(productId: number): void;
  updateItemQuantity(productId: number, quantity: number): void;
  getTotalPrice(): number;
}

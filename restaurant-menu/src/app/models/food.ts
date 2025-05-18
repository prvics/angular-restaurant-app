export interface Food {
  id: number;
  name: string;
  category: 'Appetizer' | 'Soup' | 'Main' | 'Dessert';
  price: number;
}

export type Size = {
  id: string
  label: string
  cm: number
  price: number
}

export type Topping = {
  id: string
  name: string
  price: number
  icon: string
}

export const sizes: Size[] = [
  { id: 'small', label: 'Small', cm: 26, price: 150 },
  { id: 'medium', label: 'Medium', cm: 30, price: 190 },
  { id: 'large', label: 'Large', cm: 34, price: 230 },
]

export const toppings: Topping[] = [
  { id: 'pepperoni', name: 'Pepperoni', price: 25, icon: '🍕' },
  { id: 'mozzarella', name: 'Extra Mozzarella', price: 30, icon: '🧀' },
  { id: 'mushroom', name: 'Mushroom', price: 20, icon: '🍄' },
  { id: 'olives', name: 'Olives', price: 15, icon: '🫒' },
  { id: 'jalapeno', name: 'Jalapeños', price: 20, icon: '🌶️' },
  { id: 'rocket', name: 'Rocket & Parmesan', price: 25, icon: '🌿' },
  { id: 'chilli-honey', name: 'Chilli Honey', price: 15, icon: '🍯' },
  { id: 'artichoke', name: 'Artichoke', price: 30, icon: '🍂' },
]

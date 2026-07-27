export type MenuItem = {
  id: string
  name: string
  description: string
  price: number
  tag?: string
  image?: string
}

export const signaturePizzas: MenuItem[] = [
  {
    id: 'margherita-reale',
    name: 'Margherita Reale',
    description: 'San Marzano tomato, fior di latte, torn basil, pesto',
    price: 180,
  },
  {
    id: 'el-rehab-special',
    name: 'El Rehab Special',
    description: 'Pepperoni, mushroom, olives, artichoke, extra mozzarella',
    price: 260,
    tag: 'Best Seller',
  },
  {
    id: 'pepperoni-overload',
    name: 'Pepperoni Overload',
    description: 'Cheese overload? Yes, please. Double pepperoni, hot honey',
    price: 230,
    tag: "Chef's Pick",
  },
]

export const alsoOnMenu: MenuItem[] = [
  {
    id: 'four-cheese',
    name: 'Four Cheese',
    description: 'Mozzarella, gorgonzola, parmesan, ricotta',
    price: 220,
  },
  {
    id: 'veggie-garden',
    name: 'Veggie Garden',
    description: 'Peppers, corn, olives, mushroom, rocket',
    price: 190,
  },
  {
    id: 'chicken-bbq',
    name: 'Chicken BBQ',
    description: 'Grilled chicken, BBQ sauce, red onion, mozzarella',
    price: 240,
  },
]

export const stats = [
  { value: 300, suffix: '°C', label: 'Oven heat' },
  { value: 10, suffix: 'min', label: 'Fire to table' },
  { value: 24, suffix: 'h', label: 'Slow-proofed dough' },
  { value: 3, suffix: '', label: 'Ingredients per pie, minimum fuss' },
]

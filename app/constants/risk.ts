import { ColorValue } from "react-native"

export const riskindicators: Riskindicators[] = [
  { id: 1, label: 'Deficient', color: '#EF9611' },
  { id: 2, label: 'Risk', color: '#FFF4E4' },
  { id: 3, label: 'Wild Type', color: '#D2D2D2' },
  { id: 4, label: 'Improved', color: '#EBFBE2' },
  { id: 5, label: 'Optimal', color: '#81B578' },
]

interface Riskindicators {
  id: number
  label: string
  color: ColorValue
}
export type ColorGray =
  | 'gray-100'
  | 'gray-200'
  | 'gray-300'
  | 'gray-400'
  | 'gray-500'
  | 'gray-600'
  | 'gray-700'
  | 'gray-800'
  | 'gray-900'

export type ColorPrimary =
  | 'primary-100'
  | 'primary-200'
  | 'primary-300'
  | 'primary-400'
  | 'primary-500'
  | 'primary-600'
  | 'primary-700'
  | 'primary-800'
  | 'primary-900'

export type Hue = 'gray' | 'primary'

export type Color = ColorGray | ColorPrimary | 'transparent'

export interface iTheme {
  colors: Record<Color, string>;
}

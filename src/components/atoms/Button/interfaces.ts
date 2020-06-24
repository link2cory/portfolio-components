interface ButtonProps {
  variant?: ButtonVariant;
  fontSize?: FontSize;
}

export type ButtonVariant = 'primary' | 'secondary' | 'default'

export type FontSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export { ButtonProps }

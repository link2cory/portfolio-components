export type ButtonProps = StyledButtonProps

export interface StyledButtonProps {
  variant?: ButtonVariant;
  fontSize?: FontSize;
  href?: string;
}

export type ButtonVariant = 'primary' | 'secondary' | 'default'

export type FontSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

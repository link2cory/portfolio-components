import React from 'react'
import { ButtonProps } from './interfaces'
import StyledButton from './Button.styles'

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  fontSize,
}: React.PropsWithChildren<ButtonProps>) => (
  <StyledButton variant={variant || 'default'} fontSize={fontSize}>
    {children}
  </StyledButton>
)

export default Button

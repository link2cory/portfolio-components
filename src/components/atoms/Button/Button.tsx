import React from 'react'
import { ButtonProps } from './interfaces'
import StyledButton from './Button.styles'

const Button: React.FC<ButtonProps> = ({
  children,
  primary,
  fontSize,
}: React.PropsWithChildren<ButtonProps>) => (
  <StyledButton primary={primary}>{children}</StyledButton>
)

export default Button

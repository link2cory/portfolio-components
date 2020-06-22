import React from 'react'
import { ButtonProps } from './interfaces'
import StyledButton from './Button.styles'

const Button: React.FC<ButtonProps> = ({
  children,
}: React.PropsWithChildren<ButtonProps>) => (
  <StyledButton>{children}</StyledButton>
)

export default Button

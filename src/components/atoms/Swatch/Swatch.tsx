import React from 'react'

import { SwatchProps } from './interfaces'
import StyledSwatch from './Swatch.styles'

const Swatch: React.FC<SwatchProps> = ({ color }: SwatchProps) => (
  <StyledSwatch color={color} />
)

export default Swatch

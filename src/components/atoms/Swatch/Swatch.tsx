import React from 'react'

import { SwatchProps } from './interfaces'
import StyledSwatch from './Swatch.styles'

const Swatch: React.FC<SwatchProps> = ({ hue, shade }: SwatchProps) => (
  <StyledSwatch hue={hue} shade={shade} />
)

export default Swatch

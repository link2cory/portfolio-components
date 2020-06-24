import React from 'react'
import { withTheme } from 'styled-components'

import { Color, Shade } from '../../../theme/interfaces'
import Swatch from '../../atoms/Swatch'

import { SwatchListProps } from './interfaces'
import StyledSwatchList from './SwatchList.styles'

const SwatchList: React.FC<SwatchListProps> = ({
  theme,
  hue,
}: SwatchListProps) => {
  const children = Object.keys(theme.colors[hue])
    .map((key) => <Swatch key={key} hue={hue} shade={key as Shade} />)

  return <StyledSwatchList>{children}</StyledSwatchList>
}

export default withTheme(SwatchList)

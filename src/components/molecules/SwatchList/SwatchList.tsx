import React from 'react'
import { withTheme } from 'styled-components'

import { Color } from '../../../theme/interfaces'
import Swatch from '../../atoms/Swatch'

import { SwatchListProps } from './interfaces'
import StyledSwatchList from './SwatchList.styles'

const SwatchList: React.FC<SwatchListProps> = ({
  theme,
  hue,
}: SwatchListProps) => {
  const children = Object.keys(theme.colors)
    .filter((key) => key.startsWith(hue))
    .map((key) => <Swatch key={key} color={key as Color} />)

  return <StyledSwatchList>{children}</StyledSwatchList>
}

export default withTheme(SwatchList)

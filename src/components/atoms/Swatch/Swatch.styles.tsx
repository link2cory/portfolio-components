import styled from 'styled-components'
import { StyledSwatchProps } from './interfaces'
import { Color, Hue, Shade } from '../../../theme/interfaces'

const getHueAndShadeFromColor: [Hue, Shade] = (color: Color) => {
  const hue = color.slice(0, color.indexOf('-')) as Hue
  const shade = color.slice(color.indexOf('-') + 1) as Shade

  return [hue, shade]
}

const StyledSwatch = styled.div<StyledSwatchProps>`
  background-color: ${(props) => props.theme.colors[props.hue][props.shade]};
  height: 500px;
  min-height: 0;
  flex: 1 1 auto;
`

export default StyledSwatch

import styled from 'styled-components'
import { StyledSwatchProps } from './interfaces'

const StyledSwatch =
  styled.div <
  StyledSwatchProps >
  `
  background-color: ${(props) => props.theme.colors[props.color]};
  height: 100px;
`

export default StyledSwatch

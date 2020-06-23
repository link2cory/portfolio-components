import styled from 'styled-components'
import { StyledSwatchProps } from './interfaces'

const StyledSwatch =
  styled.div <
  StyledSwatchProps >
  `
  background-color: ${(props) => props.theme.colors[props.color]};
  height: 100px;
  min-width: 0;
  flex: 1 1 auto;
`

export default StyledSwatch

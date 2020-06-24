import styled from 'styled-components'
import { Color } from '../../../theme/interfaces'
import { ButtonProps } from './interfaces'

const fontSize = {
  sm: '0.5rem',
  default: '1rem',
  lg: '1.5rem',
}

type ButtonTag = 'a' | 'button'

const resolveVariant = (props: ButtonProps) => {
  let backgroundColor: Color
  let backgroundColorHover: Color
  let contentColor: Color
  let contentColorHover: Color
  let tag: ButtonTag

  switch (props.variant) {
    case 'primary':
      backgroundColor = 'gray-700'
      backgroundColorHover = 'gray-600'
      contentColor = 'gray-400'
      contentColorHover = 'gray-100'

      tag = 'button'
      break

    default:
      backgroundColor = 'transparent'
      backgroundColorHover = 'transparent'
      contentColor = 'gray-400'
      contentColorHover = 'gray-100'

      tag = 'a'
  }

  return {
    backgroundColor,
    backgroundColorHover,
    contentColor,
    contentColorHover,
    as: tag,
  }
}

const resolveDynamicProps = (props) => ({
  ...resolveVariant(props),
})

const StyledButton = styled.button.attrs((props: ButtonProps) =>
  resolveDynamicProps(props)
)`
  font-weight: 500;
  font-size: ${(props) => fontSize[props.fontSize] || fontSize.default};
  color: ${(props) => props.theme.colors[props.contentColor]};
  text-decoration: none;
  transition: all 0.3s ease 0s;

  padding: 9px 25px;
  background-color: ${(props) => props.theme.colors[props.backgroundColor]};
  border: none;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.theme.colors[props.backgroundColorHover]};
    color: ${(props) => props.theme.colors[props.contentColorHover]};
  }
`

export default StyledButton
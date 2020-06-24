import styled from 'styled-components'
import { Color } from '../../../theme/interfaces'
import { StyledButtonProps } from './interfaces'

type ButtonTag = 'a' | 'button'

const resolveVariant = (props: StyledButtonProps) => {
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
    case 'secondary':
      return {
        backgroundColor: 'translucent',
        backgroundColorHover: 'gray-900',
        contentColor: 'gray-400',
        contentColorHover: 'gray-100',
        tag: 'button',
      }

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

const resolveDynamicProps = (props: StyledButtonProps) => ({
  ...resolveVariant(props),
})

const StyledButton =
  styled.button.attrs((props: StyledButtonProps) =>
    resolveDynamicProps(props)
  ) <
  StyledButtonProps >
  `
  font-weight: 500;
  font-size: 1rem;
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

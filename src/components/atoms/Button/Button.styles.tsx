import styled from 'styled-components'

const fontSize = {
  sm: '0.5rem',
  default: '1rem',
  lg: '1.5rem',
}

const resolveDynamicProps = (props) => {
  const dynamicBackgroundColor =
    props.variant === 'primary' ? 'rgba(0, 136, 169, 1)' : 'rgba(0, 0, 0, 0)'
  const dynamicBackgroundColorOnHover =
    props.variant === 'primary' ? 'rgba(0, 136, 169, 0.8)' : 'rgba(0, 0, 0, 0)'
  const dynamicColorOnHover =
    props.variant === 'primary' ? '#edf0f1' : '#0088a9'
  const as = props.variant === 'primary' ? 'button' : 'a'

  return {
    dynamicBackgroundColor,
    dynamicBackgroundColorOnHover,
    dynamicColorOnHover,
    as,
  }
}

const StyledButton = styled.button.attrs((props) => resolveDynamicProps(props))`
  font-weight: 500;
  font-size: ${(props) => fontSize[props.fontSize] || fontSize.default};
  color: #edf0f1;
  text-decoration: none;
  transition: all 0.3s ease 0s;

  padding: 9px 25px;
  background-color: ${(props) => props.dynamicBackgroundColor};
  border: none;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.dynamicBackgroundColorOnHover};
    color: ${(props) => props.dynamicColorOnHover};
  }
`

export default StyledButton

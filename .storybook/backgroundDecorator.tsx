import React from 'react'
import styled from 'styled-components'

const Background = styled.div`
  height: 1000px;
  background-color: ${(props) => props.theme.colors['gray-500']};
`
const BackgroundDecorator = (storyFn) => <Background>{storyFn()}</Background>

export default BackgroundDecorator

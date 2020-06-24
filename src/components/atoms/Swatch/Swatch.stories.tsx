import React from 'react'

import Swatch from './Swatch'
import { SwatchProps } from './interfaces'

export default {
  component: Swatch,
  title: 'Swatch',
  includeStories: /.*Story$/,
}

export const SwatchDefaultProps: SwatchProps = {
  color: 'gray-500',
  hue: 'gray',
  shade: '500',
}

export const DefaultStory = () => <Swatch {...SwatchDefaultProps} />

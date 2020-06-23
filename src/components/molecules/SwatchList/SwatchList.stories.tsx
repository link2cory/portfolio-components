import React from 'react'

import SwatchList from './SwatchList'
import { SwatchListProps } from './interfaces'

export default {
  component: SwatchList,
  title: 'SwatchList',
  includeStories: /.*Story$/,
}

export const SwatchListDefaultProps: SwatchListProps = { hue: 'gray' }

export const DefaultStory = () => <SwatchList {...SwatchListDefaultProps} />

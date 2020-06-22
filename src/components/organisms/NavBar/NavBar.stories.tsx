import React from 'react'
import { action } from '@storybook/addon-actions'

import NavBar from './NavBar'
import { NavBarProps } from './interfaces'

export default {
  component: NavBar,
  title: 'NavBar',
  includeStories: /.*Story$/,
}

export const NavBarDefaultProps: NavBarProps = {}

export const DefaultStory = () => <NavBar {...NavBarDefaultProps} />

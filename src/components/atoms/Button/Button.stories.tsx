import React from 'react'
import { action } from '@storybook/addon-actions'

import Button from './Button'
import { ButtonProps } from './interfaces'

export default {
  component: Button,
  title: 'Button',
  includeStories: /.*Story$/,
}

export const ButtonDefaultProps: ButtonProps = {}

export const DefaultStory = () => (
  <Button {...ButtonDefaultProps}>Click Me!</Button>
)

export const PrimaryButtonStory = () => <Button primary>Primary Button</Button>

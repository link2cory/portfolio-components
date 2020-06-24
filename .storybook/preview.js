import { addDecorator } from '@storybook/react'
import ThemeDecorator from './themeDecorator'
import BackgroundDecorator from './backgroundDecorator'

addDecorator(BackgroundDecorator)
addDecorator(ThemeDecorator)

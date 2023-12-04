import { StoryObj, Meta } from '@storybook/react'

import { Toast, IToastProps } from '@my-ignite-uii/react'

export default {
  title: 'Others/Toast',
  component: Toast,
} as Meta<IToastProps>

export const Primary: StoryObj<IToastProps> = {}

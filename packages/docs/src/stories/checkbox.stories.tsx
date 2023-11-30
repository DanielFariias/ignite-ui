import { StoryObj, Meta } from '@storybook/react'

import { Checkbox, ICheckboxProps, Box, Text } from '@my-ignite-uii/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      )
    },
  ],
} as Meta<ICheckboxProps>

export const Primary: StoryObj<ICheckboxProps> = {
  args: {
    placeholder: 'Type your message',
  },
}

export const Disabled: StoryObj<ICheckboxProps> = {
  args: {
    disabled: true,
  },
}

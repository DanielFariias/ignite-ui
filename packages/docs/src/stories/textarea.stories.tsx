import { StoryObj, Meta } from '@storybook/react'

import { Textarea, ITextareaProps, Box, Text } from '@my-ignite-uii/react'

export default {
  title: 'Form/Textarea',
  component: Textarea,
  args: {},
  decorators: [
    (Story) => (
      <Box
        as={'label'}
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        }}
      >
        <Text size={'sm'}>Message</Text>
        <Story />
      </Box>
    ),
  ],
} as Meta<ITextareaProps>

export const Primary: StoryObj<ITextareaProps> = {
  args: {
    placeholder: 'Type your message',
  },
}

export const Disabled: StoryObj<ITextareaProps> = {
  args: {
    disabled: true,
  },
}

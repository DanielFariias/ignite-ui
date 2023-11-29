import { StoryObj, Meta } from '@storybook/react'

import { TextInput, ITextInputProps, Box, Text } from '@ignite-ui/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
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
        <Text size={'sm'}>Email address</Text>
        <Story />
      </Box>
    ),
  ],
} as Meta<ITextInputProps>

export const Primary: StoryObj<ITextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Disabled: StoryObj<ITextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<ITextInputProps> = {
  args: {
    prefix: 'call.com/',
  },
}

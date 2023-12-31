import { StoryObj, Meta } from '@storybook/react'

import { Tooltip, ITooltipProps, Box, Text } from '@my-ignite-uii/react'

export default {
  title: 'Others/Tooltip',
  component: Tooltip,
  args: {
    children: <Text>Hover me</Text>,
    message: 'This is a tooltip',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            gap: '$2',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<ITooltipProps>

export const Primary: StoryObj<ITooltipProps> = {}

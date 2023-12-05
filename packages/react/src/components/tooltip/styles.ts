import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'
import { Text } from '../text'

export const Container = styled(Tooltip.Root, {})

export const Content = styled(Tooltip.Content, {
  padding: '$3 $4',
  backgroundColor: '$gray900',
  color: '$gray100',
  fontFamily: '$default',
  borderRadius: '$xs',
  fontWeight: '$medium',
  filter: 'drop-shadow(4px 16px 24px rgba(0, 0, 0, 0.25))',
})

export const Message = styled(Text, {
  fontWeight: '$medium',
  lineHeight: '$tall',
})

export const Arrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})

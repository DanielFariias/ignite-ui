import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'
import { Text } from '../text'

export const Container = styled(Tooltip.Root, {})

export const Content = styled(Tooltip.Content, {
  padding: '$3 $4',
  backgroundColor: '$gray900',
  borderRadius: '$xs',
})

export const Message = styled(Text, {
  fontWeight: '$medium',
  lineHeight: '$tall',
})

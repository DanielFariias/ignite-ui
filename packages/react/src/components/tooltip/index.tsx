import { ComponentProps, ReactNode } from 'react'
import * as TooltipRadix from '@radix-ui/react-tooltip'

import * as S from './styles'

export type ITooltipProps = ComponentProps<typeof S.Container> & {
  message: string | ReactNode
}

export function Tooltip({ children, message, ...props }: ITooltipProps) {
  return (
    <TooltipRadix.Provider>
      <S.Container {...props}>
        <TooltipRadix.Trigger asChild>{children}</TooltipRadix.Trigger>

        <TooltipRadix.Portal>
          <S.Content>
            <S.Message size={'sm'}>{message}</S.Message>
            <S.Arrow />
          </S.Content>
        </TooltipRadix.Portal>
      </S.Container>
    </TooltipRadix.Provider>
  )
}

Tooltip.displayName = 'Tooltip'

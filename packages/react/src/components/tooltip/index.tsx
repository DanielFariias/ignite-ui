import { ComponentProps } from 'react'
import * as T from '@radix-ui/react-tooltip'

import * as S from './styles'

export type ITooltipProps = ComponentProps<typeof S.Container> & {
  message?: string
}

export function Tooltip(props: ITooltipProps) {
  return (
    <T.Provider>
      <S.Container>
        <T.Trigger asChild>{props.children}</T.Trigger>

        <T.Portal>
          <S.Content>
            <S.Message size={'sm'}>{props.message}</S.Message>
            <T.Arrow />
          </S.Content>
        </T.Portal>
      </S.Container>
    </T.Provider>
  )
}

Tooltip.displayName = 'Tooltip'

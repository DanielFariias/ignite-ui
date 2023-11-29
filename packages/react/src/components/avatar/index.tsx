import { ComponentProps } from 'react'

import { User } from 'phosphor-react'

import * as S from './styles'

export type IAvatarProps = ComponentProps<typeof S.Image>

export function Avatar(props: IAvatarProps) {
  return (
    <S.Container>
      <S.Image {...props} />

      <S.Fallback delayMs={600}>
        <User />
      </S.Fallback>
    </S.Container>
  )
}

Avatar.displayName = 'Avatar'

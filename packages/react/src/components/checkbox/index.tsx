import { ComponentProps } from 'react'

import { Check } from 'phosphor-react'

import * as S from './styles'

export type ICheckboxProps = ComponentProps<typeof S.Container>

export function Checkbox(props: ICheckboxProps) {
  return (
    <S.Container {...props}>
      <S.CheckboxIndicator asChild>
        <Check weight="bold" />
      </S.CheckboxIndicator>
    </S.Container>
  )
}

Checkbox.displayName = 'Checkbox'

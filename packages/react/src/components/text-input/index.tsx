import { ComponentProps } from 'react'
import * as S from './styles'

export interface ITextInputProps extends ComponentProps<typeof S.Input> {
  prefix?: string
}

export function TextInput({ prefix, ...restProps }: ITextInputProps) {
  return (
    <S.Container>
      {!!prefix && <S.Prefix>{prefix}</S.Prefix>}
      <S.Input {...restProps} />
    </S.Container>
  )
}

TextInput.displayName = 'TextInput'

import { ComponentProps, ElementRef, forwardRef } from 'react'
import * as S from './styles'
import { VariantProps } from '@stitches/react'

export interface ITextInputProps
  extends Omit<ComponentProps<typeof S.Input>, 'size'> {
  prefix?: string
  size?: VariantProps<typeof S.Container>['size']
}

export const TextInput = forwardRef<
  ElementRef<typeof S.Input>,
  ITextInputProps
>(({ prefix, size, ...restProps }: ITextInputProps, ref) => {
  return (
    <S.Container size={size}>
      {!!prefix && <S.Prefix>{prefix}</S.Prefix>}
      <S.Input ref={ref} {...restProps} />
    </S.Container>
  )
})

TextInput.displayName = 'TextInput'

import React, { ComponentProps } from 'react'
import * as ToastRadix from '@radix-ui/react-toast'

import * as S from './styles'
import { X } from 'phosphor-react'

export type IToastProps = ComponentProps<typeof S.ToastRoot> & {
  title: string
  description?: string
}

export function Toast({ title, description, ...props }: IToastProps) {
  return (
    <ToastRadix.Provider>
      <S.ToastRoot {...props}>
        <S.ToastTitle>{title}</S.ToastTitle>
        {description && <S.ToastDescription>{description}</S.ToastDescription>}
        <S.ToastClose>
          <X size={20} weight="light" />
        </S.ToastClose>
      </S.ToastRoot>

      <S.ToastViewport />
    </ToastRadix.Provider>
  )
}

Toast.displayName = 'Toast'

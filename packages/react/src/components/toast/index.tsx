import React, { ComponentProps } from 'react'
import * as T from '@radix-ui/react-toast'

import * as S from './styles'
import { X } from 'phosphor-react'
import { Button } from '../button'

export type IToastProps = ComponentProps<typeof S.Container> & {
  message?: string
}

export function Toast(props: IToastProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <T.Provider>
      <Button onClick={() => setOpen(true)}>Open toast</Button>
      {/* <S.ToastRoot defaultOpen open={open} onOpenChange={setOpen}> */}
      <S.ToastRoot open={open} onOpenChange={() => setOpen(false)}>
        <S.ToastTitle>Agendamento realizado</S.ToastTitle>
        <S.ToastDescription>
          Quarta-feira, 23 de Outubro às 16h
        </S.ToastDescription>
        <S.ToastClose>
          <X size={20} />
        </S.ToastClose>
      </S.ToastRoot>

      <S.ToastViewport />
    </T.Provider>
  )
}

Toast.displayName = 'Toast'

import React, { useState } from 'react'

import { StoryObj, Meta } from '@storybook/react'

import { Toast, IToastProps, Button } from '@my-ignite-uii/react'

const DemoToast = (props: IToastProps) => {
  const [isopen, setIsOpen] = useState(false)

  const timerRef = React.useRef(0)

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  function aaaaa() {
    setIsOpen(false)
    window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => {
      setIsOpen(true)
    }, 100)
  }

  return (
    <div>
      <Button
        onClick={() => {
          aaaaa()
        }}
      >
        Agendar
      </Button>
      <Toast open={isopen} onOpenChange={setIsOpen} {...props} />
    </div>
  )
}

export default {
  title: 'Others/Toast',
  component: DemoToast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
} as Meta<IToastProps>

export const Primary: StoryObj<IToastProps> = {}

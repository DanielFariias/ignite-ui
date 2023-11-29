import * as S from './styles'

export interface IMultiStepProps {
  size: number
  currentStep?: number
}

export function MultiStep({ size, currentStep = 1 }: IMultiStepProps) {
  return (
    <S.Container>
      <S.Label>
        Passo {currentStep} de {size}
      </S.Label>

      <S.Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <S.Step key={step} active={currentStep >= step} />
        })}
      </S.Steps>
    </S.Container>
  )
}

MultiStep.displayName = 'MultiStep'

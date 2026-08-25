import { createFileRoute } from '@tanstack/react-router'
import { UseRefTutorial } from '../features/useRef/UseRefTutorial'

export const Route = createFileRoute('/useRef')({
  component: UseRefTutorial,
})


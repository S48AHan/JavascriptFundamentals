import { createFileRoute } from '@tanstack/react-router'
import { Index } from '../features/home/Index'

export const Route = createFileRoute('/')({
  component: Index,
})


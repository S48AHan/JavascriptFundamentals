import { createFileRoute } from '@tanstack/react-router'
import UserPage from '../features/userList/UserPage'

export const Route = createFileRoute('/userList')({
  component: UserPage,
})


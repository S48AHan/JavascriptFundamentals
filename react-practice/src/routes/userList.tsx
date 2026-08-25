import { createFileRoute } from '@tanstack/react-router'
import { UserList } from '../features/userList/UserList'

export const Route = createFileRoute('/userList')({
  component: UserList,
})


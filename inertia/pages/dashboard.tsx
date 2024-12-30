import { Head, usePage } from '@inertiajs/react'

export default function Dashboard() {
  const { user } = usePage().props

  return (
    <>
      <Head title="Dashboard" />
      <h1>Welcome, {user.fullName}</h1>
    </>
  )
}

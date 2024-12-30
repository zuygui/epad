import { Head, useForm } from '@inertiajs/react'
import { FormEvent } from 'react'

export default function Home() {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
    remember: false,
  })

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    post('/login')
  }

  return (
    <>
      <Head title="Login" />
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" name="email" onChange={(e) => setData('email', e.target.value)} />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setData('password', e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </>
  )
}

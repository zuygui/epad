import { useForm } from '@inertiajs/react'
import { FormEvent } from 'react'
import { toast } from 'sonner'
import { cn } from '~/components/lib/utils'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'

export function LoginForm({ className, ...props }: React.ComponentPropsWithoutRef<'form'>) {
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
    <form className={cn('flex flex-col gap-6', className)} {...props} onSubmit={handleSubmit}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="m@example.com"
            required
            onChange={(e) => setData('email', e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Button
              variant="ghost"
              className="ml-auto text-sm underline-offset-4 hover:underline"
              onClick={() =>
                toast.info('Forgot your password?', {
                  description: 'Please contact your administrator.',
                  closeButton: true,
                })
              }
            >
              Forgot your password?
            </Button>
          </div>
          <Input
            id="password"
            name="password"
            type="password"
            required
            onChange={(e) => setData('password', e.target.value)}
          />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </div>
    </form>
  )
}

/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

const SessionController = () => import('#controllers/session_controller')

router.on('/').renderInertia('home')

router.on('/login').renderInertia('login').use(middleware.guest())

router.post('/login', [SessionController, 'store']).use(middleware.guest())

router
  .group(() => {
    router.on('/dashboard').renderInertia('dashboard')

    router.post('logout', async ({ auth, response }) => {
      await auth.use('web').logout()
      return response.redirect('/login')
    })
  })
  .use(middleware.auth())

import { Head, usePage } from '@inertiajs/react'
import { DashboardSidebar } from '~/components/dashboard-sidebar'
import { ModeToggle } from '~/components/mode-toggle'
import { Sidebar, SidebarProvider, SidebarTrigger } from '~/components/ui/sidebar'

export default function Dashboard() {
  const { user }: any = usePage().props

  return (
    <>
      <Head title="Dashboard" />
      <SidebarProvider>
        <Sidebar>
          <DashboardSidebar user={user} />
        </Sidebar>
        <main>
          <SidebarTrigger />
          <h1>Hello</h1>
        </main>
      </SidebarProvider>
    </>
  )
}

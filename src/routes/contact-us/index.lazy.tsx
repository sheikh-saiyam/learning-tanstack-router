import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/contact-us/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/contact-us/"!</div>
}

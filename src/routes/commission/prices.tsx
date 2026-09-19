import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/commission/prices')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/commission/prices"!</div>
}

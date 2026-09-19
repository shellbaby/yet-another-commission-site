import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/commission/form')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/commission/form"!</div>
}

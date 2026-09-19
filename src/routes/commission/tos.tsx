import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/commission/tos')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/commission/tos"!</div>
}

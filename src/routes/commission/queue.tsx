import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/commission/queue')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/commission/queue"!</div>
}

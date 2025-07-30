import { useBearStore } from '@/store/useBear'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/zustand-bear/')({
  component: RouteComponent,
})

function RouteComponent() {
  const bears = useBearStore((state) => state.bears)

  const increasePopulation = useBearStore((state) => state.increasePopulation)

  const removeAllBears = useBearStore((state) => state.removeAllBears)

  return (ss
    <>
      <h1>{bears} bears around here...</h1>
      <button onClick={increasePopulation} className="px-2 py-2 border rounded">
        one up
      </button>
      <button onClick={removeAllBears} className="px-2 py-2 border rounded">
        remove
      </button>
    </>
  )
}

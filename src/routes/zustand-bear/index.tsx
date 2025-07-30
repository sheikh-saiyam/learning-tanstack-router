import { useBearStore } from '@/store/useBear'
import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/zustand-bear/')({
  component: RouteComponent,
})

function RouteComponent() {
  const bears = useBearStore((state) => state.bears)

  const increasePopulation = useBearStore((state) => state.increasePopulation)

  const removeAllBears = useBearStore((state) => state.removeAllBears)

  const updateBears = useBearStore((state) => state.updateBears)

  return (
    <div className="flex items-center justify-center min-h-screen flex-col gap-2">
      <h1>
        <strong>{bears}</strong> bears around here...
      </h1>
      <div className="flex items-center gap-1.5">
        <Button variant="default" onClick={increasePopulation}>
          one up
        </Button>
        <Button variant="default" onClick={removeAllBears}>
          remove
        </Button>
        <Button variant="default" onClick={() => updateBears(1000)}>
          Update
        </Button>
      </div>
    </div>
  )
}

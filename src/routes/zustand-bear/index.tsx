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
    <div className='container'>
      <h1>{bears} bears around here...</h1>
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
  )
}

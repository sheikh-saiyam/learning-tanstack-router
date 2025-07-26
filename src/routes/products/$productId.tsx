import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/$productId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    if (params.productId === 'products1') throw new Error('Error caught')
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return {
      productId: params.productId,
    }
  },
  pendingComponent: () => 'Loading...',
  errorComponent: () => 'Error (!!!)',
})

function RouteComponent() {
  const { productId } = Route.useLoaderData()
  return <div>Hello "/products/${productId}"!</div>
}

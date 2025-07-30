import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/products/')({
  component: RouteComponent,
})

function RouteComponent() {
  const products: string[] = ['products1', 'products2', 'products3']
  return (
    <div className="mt-24 flex items-center justify-center gap-4">
      {products.map((product) => (
        <Link
          className="hover:underline"
          key={product}
          to={`/products/$productId`}
          params={{ productId: product }}
        >
          {product}
        </Link>
      ))}
    </div>
  )
}

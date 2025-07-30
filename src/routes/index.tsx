import { createFileRoute } from '@tanstack/react-router'
import logo from '../logo.svg'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="text-center">
      <header className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]">
        <img
          src={logo}
          className="h-[40vmin] pointer-events-none animate-[spin_20s_linear_infinite]"
          alt="logo"
        />
        <p>
          Exploring and Learning <code>Tanstack Router with Zustand</code>
        </p>
        <a
          className="text-[#61dafb] hover:underline"
          href="https://tanstack.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tanstack Router
        </a>
        <a
          className="text-[#61dafb] hover:underline"
          href="https://zustand.docs.pmnd.rs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zustand
        </a>
      </header>
    </div>
  )
}

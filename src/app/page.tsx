import dynamic from 'next/dynamic'

const Dashboard = dynamic(() => import('../components/Dashboard'), { ssr: false })

export default function Home() {
  return (
    <main className="min-h-screen">
      <Dashboard />
    </main>
  )
}
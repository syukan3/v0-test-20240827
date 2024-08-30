import dynamic from 'next/dynamic'

const Advertisement = dynamic(() => import('../components/Advertisement'), { ssr: false })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Advertisement />
    </main>
  )
}

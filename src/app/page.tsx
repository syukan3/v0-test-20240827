import dynamic from 'next/dynamic'

const EventAd = dynamic(() => import('../components/EventAd'), { ssr: false })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <EventAd />
    </main>
  )
}

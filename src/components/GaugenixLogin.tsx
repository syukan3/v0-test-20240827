'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState, useEffect } from 'react'
import { Loader2 } from 'lucide-react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export function GaugenixLoginDynamic() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [time, setTime] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  useEffect(() => {
    const moveCircle = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', moveCircle)

    const timer = setInterval(() => {
      setTime(prevTime => (prevTime + 1) % 360)
    }, 50)

    return () => {
      window.removeEventListener('mousemove', moveCircle)
      clearInterval(timer)
    }
  }, [])

  const getPosition = (radius, offset = 0) => {
    const noise = Math.sin(time * 0.1 + offset) * 20
    return {
      x: Math.cos((time + offset) * Math.PI / 180) * radius + noise,
      y: Math.sin((time + offset) * Math.PI / 180) * radius + noise,
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    })

    if (result.error) {
      // エラー処理
      console.error('ログインエラー:', result.error)
      setIsLoading(false)
    } else {
      // ログイン成功時の処理
      router.push('/dashboard') // ダッシュボードページへリダイレクト
    }
  }

  const handleOAuthSignIn = (provider) => {
    signIn(provider, { callbackUrl: '/dashboard' })
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/2 bg-blue-200 p-12 flex flex-col justify-between relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold text-blue-600 tracking-wider">GAUGENIX</h1>
        </div>
        {[
          { size: 40, color: 'bg-blue-300', radius: 100, offset: 0 },
          { size: 72, color: 'bg-blue-400', radius: 150, offset: 90 },
          { size: 24, color: 'bg-blue-200', radius: 80, offset: 180 },
          { size: 16, color: 'bg-blue-500', radius: 60, offset: 270 },
          { size: 32, color: 'bg-blue-600', radius: 120, offset: 45 },
          { size: 20, color: 'bg-blue-100', radius: 90, offset: 225 },
        ].map((circle, index) => (
          <div 
            key={index}
            className={`absolute w-${circle.size} h-${circle.size} ${circle.color} rounded-full transition-all duration-300 ease-in-out ${index === 4 ? 'opacity-50' : ''}`}
            style={{ 
              left: `calc(${index % 2 ? 'auto' : '50%'} + ${getPosition(circle.radius, circle.offset).x}px)`, 
              right: index % 2 ? `calc(${index === 1 ? '0%' : '40%'} + ${getPosition(circle.radius, circle.offset).x}px)` : 'auto',
              top: `calc(${index < 3 ? index === 0 ? '25%' : '33%' : '50%'} + ${getPosition(circle.radius, circle.offset).y}px)`,
              bottom: index >= 3 ? `calc(${index === 3 ? '25%' : '40%'} + ${getPosition(circle.radius, circle.offset).y}px)` : 'auto',
            }}
          ></div>
        ))}
        <div 
          className="absolute w-8 h-8 bg-blue-600 rounded-full transition-all duration-300 ease-out"
          style={{ 
            left: `${position.x}px`, 
            top: `${position.y}px`,
            transform: 'translate(-50%, -50%)'
          }}
        ></div>
        <div className="flex space-x-4 text-sm text-blue-600 relative z-10">
          <a href="#" className="hover:underline">概要</a>
          <a href="#" className="hover:underline">プライバシー</a>
          <a href="#" className="hover:underline">利用規約</a>
          <a href="#" className="hover:underline">よくある質問</a>
        </div>
      </div>
      <div className="w-1/2 bg-white p-12 flex items-center justify-center">
        <div className="w-full max-w-md">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">ログイン</h2>
          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">メールアドレス</Label>
              <Input 
                id="email" 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="メールアドレスを入力" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">パスワード</Label>
              <Input 
                id="password" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="パスワードを入力" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input 
                  id="remember" 
                  type="checkbox" 
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" 
                />
                <Label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                  ログイン状態を保持する
                </Label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                  パスワードをお忘れですか？
                </a>
              </div>
            </div>
            <div>
              <Button 
                type="submit"
                className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin mr-2" />
                    ログイン中...
                  </>
                ) : 'ログイン'}
              </Button>
            </div>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  または
                </span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button 
                onClick={() => handleOAuthSignIn('twitter')}
                className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                Twitter
              </Button>
              <Button 
                onClick={() => handleOAuthSignIn('github')}
                className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
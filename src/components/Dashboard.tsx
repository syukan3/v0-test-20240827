'use client';

import { cn } from "@/lib/utils"
import { useState } from 'react'
import { MagnifyingGlassIcon, ArrowPathIcon, ChevronDownIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/outline'
import { 
  Square3Stack3DIcon, DocumentTextIcon, BuildingOfficeIcon, UserGroupIcon, SignalIcon, 
  CameraIcon, VideoCameraSlashIcon, UserIcon, KeyIcon, LockClosedIcon, 
  QuestionMarkCircleIcon, ChatBubbleLeftRightIcon, Squares2X2Icon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Dashboard() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [selectedItem, setSelectedItem] = useState('ダッシュボード')

  const menuItems = [
    { name: 'ダッシュボード', icon: Square3Stack3DIcon },
    { name: 'New View', icon: DocumentTextIcon },
    { name: '施設', icon: BuildingOfficeIcon },
    { name: 'グループ', icon: UserGroupIcon },
    { name: 'センサー', icon: SignalIcon },
    { name: 'カメラ', icon: CameraIcon },
    { name: 'カメラ範囲', icon: VideoCameraSlashIcon },
    { name: 'ユーザー', icon: UserIcon },
    { name: 'ロール', icon: KeyIcon },
    { name: '権限', icon: LockClosedIcon },
    { name: 'このアプリについて', icon: QuestionMarkCircleIcon },
    { name: 'フィードバック', icon: ChatBubbleLeftRightIcon },
    { name: 'App Gallery', icon: Squares2X2Icon },
  ]

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`bg-white transition-all duration-300 ease-in-out ${isSidebarCollapsed ? 'w-16' : 'w-64'}`}>
        <div className="flex items-center justify-between p-4 border-b">
          {!isSidebarCollapsed && (
            <>
              <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
              <h1 className="text-xl font-bold tracking-tight text-gray-900">GAUGENIX</h1>
            </>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className="text-gray-500"
          >
            {isSidebarCollapsed ? <ChevronDoubleRightIcon className="h-5 w-5" /> : <ChevronDoubleLeftIcon className="h-5 w-5" />}
          </Button>
        </div>
        <nav className="py-2">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href="#"
                  className={`flex items-center py-3 px-4 text-sm ${
                    item.name === selectedItem 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedItem(item.name)}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {!isSidebarCollapsed && item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-hidden flex flex-col">
        <header className="bg-white shadow-sm z-10">
          <div className="max-w-full mx-auto py-2 px-4 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-800 tracking-tight">{selectedItem}</h2>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="検索 ダッシュボード"
                  className="pl-10 pr-4 py-1 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                />
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              </div>
              <Button variant="ghost" size="icon" className="text-gray-500">
                <ArrowPathIcon className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-500">
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-500">
                <span className="text-xs font-medium mr-1">$</span>
                <ChevronDownIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-auto bg-gray-100 p-6">
          {/* Dashboard content placeholder */}
          <div className="bg-white rounded-lg shadow p-6 h-full flex items-center justify-center text-gray-500">
            {selectedItem}のコンテンツがここに表示されます
          </div>
        </div>
      </main>
    </div>
  )
}


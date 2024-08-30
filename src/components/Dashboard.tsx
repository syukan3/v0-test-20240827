'use client';

import { cn } from "@/lib/utils"
import { useState } from 'react'
import { MagnifyingGlassIcon, ArrowPathIcon, ChevronDownIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/outline'
import {
  Square3Stack3DIcon, DocumentTextIcon, BuildingOfficeIcon, UserGroupIcon, SignalIcon,
  CameraIcon, VideoCameraSlashIcon, UserIcon, KeyIcon, LockClosedIcon,
  QuestionMarkCircleIcon, ChatBubbleLeftRightIcon, Squares2X2Icon,
  CogIcon, ShieldCheckIcon, EyeSlashIcon, BellIcon, CreditCardIcon,
  ReceiptRefundIcon, ChartBarIcon, LifebuoyIcon, ChatBubbleOvalLeftEllipsisIcon, GlobeAltIcon,
  ArrowLeftOnRectangleIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Dashboard() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [selectedItem, setSelectedItem] = useState('ダッシュボード')
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  const menuItems = [
    { name: 'ダッシュボード', icon: Square3Stack3DIcon },
    { name: '施設', icon: BuildingOfficeIcon },
    { name: 'グループ', icon: UserGroupIcon },
    { name: 'センサー', icon: SignalIcon },
    { name: 'カメラ', icon: CameraIcon },
    { name: 'カメラ範囲', icon: VideoCameraSlashIcon },
    { name: 'ユーザー', icon: UserIcon },
    { name: 'ロール', icon: KeyIcon },
    { name: '権限', icon: LockClosedIcon },
    { name: '設定', icon: Squares2X2Icon },
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
            className={`text-gray-500 ${isSidebarCollapsed ? 'mx-auto' : ''}`}
          >
            {isSidebarCollapsed ? <ChevronDoubleRightIcon className="h-5 w-5" /> : <ChevronDoubleLeftIcon className="h-5 w-5" />}
          </Button>
        </div>
        <nav className={`py-2 ${isSidebarCollapsed ? 'px-2' : 'px-4'}`}>
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href="#"
                  className={`flex items-center py-3 px-2 text-sm rounded-md transition-colors duration-150 ease-in-out ${
                    item.name === selectedItem
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  } ${isSidebarCollapsed ? 'justify-center' : ''}`}
                  onClick={() => setSelectedItem(item.name)}
                >
                  <item.icon className={`h-5 w-5 ${
                    item.name === selectedItem ? 'text-blue-600' : 'text-gray-400'
                  } ${isSidebarCollapsed ? '' : 'mr-4'}`} />
                  {!isSidebarCollapsed && <span>{item.name}</span>}
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
              <div className={`relative transition-all duration-300 ease-in-out ${isSearchFocused ? 'w-96' : 'w-64'}`}>
                <Input
                  type="search"
                  placeholder={`検索 ${selectedItem}`}
                  className={`pl-10 pr-4 py-2 text-sm rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-400 ${isSearchFocused
                    ? 'bg-white border-blue-400 shadow-md'
                    : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                    } text-gray-500 placeholder-gray-300`}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  onChange={(e) => e.target.value ? e.target.classList.add('text-black') : e.target.classList.remove('text-black')}
                />
                <MagnifyingGlassIcon className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 ${isSearchFocused ? 'text-blue-500' : 'text-gray-400'
                  }`} />
              </div>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 w-64 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-2 py-2">
                      {[
                        { name: 'プロフィール', icon: UserIcon },
                        { name: 'アカウント設定変更', icon: CogIcon },
                        { name: 'セキュリティ設定', icon: ShieldCheckIcon },
                        { name: 'プライバシー設定', icon: EyeSlashIcon },
                        { name: '通知設定', icon: BellIcon },
                        { name: '契約プラン', icon: CreditCardIcon },
                        { name: '請求情報の確認', icon: ReceiptRefundIcon },
                        { name: '使用量の確認', icon: ChartBarIcon },
                        { name: 'ヘルプとサポート', icon: LifebuoyIcon },
                        { name: 'フィードバック', icon: ChatBubbleOvalLeftEllipsisIcon },
                        { name: '言語と地域設定', icon: GlobeAltIcon },
                        { name: 'ログアウト', icon: ArrowLeftOnRectangleIcon }
                      ].map((item, index) => (
                        <Fragment key={item.name}>
                          {index === 5 && <div className="my-2 border-t border-gray-200"></div>}
                          {index === 8 && <div className="my-2 border-t border-gray-200"></div>}
                          {index === 11 && <div className="my-2 border-t border-gray-200"></div>}
                          <Menu.Item>
                            {({ active }) => (
                              <button className={`${active ? 'bg-blue-50 text-blue-600' : 'text-gray-900'
                                } group flex rounded-md items-center w-full px-3 py-3 text-sm transition-colors duration-150 ease-in-out hover:bg-blue-50 hover:text-blue-600`}>
                                <item.icon className={`h-5 w-5 mr-3 ${active ? 'text-blue-600' : 'text-gray-400'
                                  }`} />
                                {item.name}
                              </button>
                            )}
                          </Menu.Item>
                        </Fragment>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
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


'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { MagnifyingGlassIcon, BellIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import UserMenu from '@/components/UserMenu';
import { menuItems } from '@/lib/menuItems';
import { userMenuItems } from '@/components/UserMenu';
import NotificationSidebar from './NotificationSidebar';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header({ isSidebarCollapsed, setIsSidebarCollapsed }: { isSidebarCollapsed: boolean, setIsSidebarCollapsed: (isSidebarCollapsed: boolean) => void }) {
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const pathname = usePathname();
    const currentPage = menuItems.find(item => item.href === pathname)?.name
        || userMenuItems.find(item => item.href === pathname)?.name
        || 'ダッシュボード';

    return (
        <header className="bg-white z-10 border-b border-gray-200">
            <div className="max-w-full mx-auto py-2 px-4 flex items-center justify-between border-r border-gray-200">
                <div className="flex items-center space-x-4">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                        className="text-gray-500 p-1 hover:bg-transparent relative"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={isHovered ? 'hovered' : 'default'}
                                initial={{ opacity: 0, rotate: -30 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: 30 }}
                                transition={{ duration: 0.2 }}
                            >
                                {isHovered ? (
                                    isSidebarCollapsed ? <ChevronDoubleRightIcon className="h-6 w-6 text-gray-500" /> : <ChevronDoubleLeftIcon className="h-6 w-6 text-gray-500" />
                                ) : (
                                    <Bars3Icon className="h-6 w-6 text-gray-500" />
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </Button>
                    <Link href="/" className="flex items-center">
                        <div className="w-8 h-8 bg-blue-500 rounded-full mr-2"></div>
                        <h1 className="text-xl font-bold tracking-tight text-gray-900">GAUGENIX</h1>
                    </Link>
                </div>
                <div className="flex items-center space-x-4">
                    <div className={`relative transition-all duration-300 ease-in-out ${isSearchFocused ? 'w-96' : 'w-64'}`}>
                        <Input
                            type="search"
                            placeholder={`検索 ${currentPage}`}
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
                    <button
                        onClick={() => setIsNotificationOpen(true)}
                        className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <span className="sr-only">お知らせを見る</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <UserMenu />
                </div>
            </div>
            <NotificationSidebar
                isOpen={isNotificationOpen}
                onClose={() => setIsNotificationOpen(false)}
            />
        </header>
    );
}
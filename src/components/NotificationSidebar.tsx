import Link from 'next/link';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import { fetchNotifications } from '@/lib/notificationUtils';
import { Notification } from '@/data/sampleNotifications';
import { motion, AnimatePresence } from 'framer-motion';

export default function NotificationSidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        if (isOpen) {
            loadNotifications();
        }
    }, [isOpen]);

    const loadNotifications = async () => {
        const newNotifications = await fetchNotifications(page);
        if (newNotifications.length === 0) {
            setHasMore(false);
        } else {
            setNotifications(prev => [...prev, ...newNotifications]);
            setPage(prev => prev + 1);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="fixed inset-y-0 right-0 w-96 bg-white shadow-lg z-50 overflow-hidden flex flex-col"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    >
                        <div className="p-4 bg-blue-500 text-white">
                            <div className="flex justify-between items-center">
                                <Link href="/notifications" onClick={onClose}>
                                    <h2 className="text-xl font-semibold cursor-pointer">お知らせ</h2>
                                </Link>
                                <button onClick={onClose} className="text-white hover:text-gray-200">
                                    <XMarkIcon className="h-6 w-6" />
                                </button>
                            </div>
                        </div>
                        <div className="overflow-y-auto h-full">
                            {notifications.map((notification) => (
                                <Link
                                    key={notification.id}
                                    href={`/notifications/${notification.id}`}
                                    onClick={onClose}
                                    className={`block p-4 border-b border-gray-200 ${
                                        notification.isNew ? 'bg-white' : 'bg-gray-100'
                                    } hover:bg-gray-50 transition duration-150 ease-in-out`}
                                >
                                    <div className="flex items-center">
                                        {notification.isNew && (
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                                        )}
                                        <h3 className={`text-lg font-semibold ${
                                            notification.isNew ? 'text-gray-900' : 'text-gray-500'
                                        }`}>
                                            {notification.title}
                                        </h3>
                                    </div>
                                    <p className={`mt-1 text-sm ${
                                        notification.isNew ? 'text-gray-600' : 'text-gray-400'
                                    }`}>
                                        {notification.content.substring(0, 100)}...
                                    </p>
                                    <p className={`mt-2 text-xs ${
                                        notification.isNew ? 'text-gray-500' : 'text-gray-400'
                                    }`}>
                                        {new Date(notification.date).toLocaleString('ja-JP')}
                                    </p>
                                </Link>
                            ))}
                        </div>
                        {hasMore && (
                            <button
                                onClick={loadNotifications}
                                className="w-full p-4 text-center text-blue-500 hover:bg-blue-50 transition duration-150 ease-in-out border-t border-gray-200"
                            >
                                さらに読み込む
                            </button>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
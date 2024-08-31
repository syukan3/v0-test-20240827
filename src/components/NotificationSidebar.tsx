import Link from 'next/link';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import { fetchNotifications } from '@/lib/notificationUtils';
import { Notification } from '@/data/sampleNotifications';
import { motion } from 'framer-motion';

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

    if (!isOpen) return null;

    return (
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
                <div className="flex-grow overflow-y-auto">
                    {notifications.map((notification) => (
                        <Link 
                            href={`/notifications/${notification.id}`} 
                            key={notification.id}
                            onClick={onClose}
                        >
                            <div className="p-4 border-b hover:bg-gray-50 cursor-pointer">
                                <h3 className="font-semibold text-lg mb-1 text-blue-600">{notification.title}</h3>
                                <p className="text-sm text-gray-600 mb-2">{notification.content.slice(0, 50)}...</p>
                                <p className="text-xs text-gray-400">{new Date(notification.date).toLocaleString('ja-JP')}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                {hasMore && (
                    <div className="p-4 border-t">
                        <button
                            onClick={loadNotifications}
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                        >
                            さらに読み込む
                        </button>
                    </div>
                )}
            </motion.div>
        </motion.div>
    );
}
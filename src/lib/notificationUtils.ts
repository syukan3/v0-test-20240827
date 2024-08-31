import { Notification, sampleNotifications } from '@/data/sampleNotifications';

const PAGE_SIZE = 5;

export async function fetchNotifications(page: number = 1): Promise<Notification[]> {
    // 実際のAPIコールをシミュレート
    return new Promise((resolve) => {
        setTimeout(() => {
            const start = (page - 1) * PAGE_SIZE;
            const end = start + PAGE_SIZE;
            resolve(sampleNotifications.slice(start, end));
        }, 500);
    });
}

export async function fetchNotificationById(id: string): Promise<Notification | undefined> {
    // 実際のAPIコールをシミュレート
    return new Promise((resolve) => {
        setTimeout(() => {
            const notification = sampleNotifications.find(n => n.id === id);
            resolve(notification);
        }, 500);
    });
}
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Layout from '@/components/Layout';
import { fetchNotificationById } from '@/lib/notificationUtils';

interface NotificationDetailProps {
  params: { id: string };
}

export default async function NotificationDetail({ params }: NotificationDetailProps) {
  const notification = await fetchNotificationById(params.id);

  if (!notification) {
    notFound();
  }

  return (
    <Layout>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">{notification.title}</h1>
          <p className="text-gray-600 mb-6">{new Date(notification.date).toLocaleString('ja-JP')}</p>
          <div className="mb-6">
            <Image
              src={notification.imageUrl}
              alt={notification.title}
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="prose max-w-none">
            <p className="text-gray-700">{notification.content}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
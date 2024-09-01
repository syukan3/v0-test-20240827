'use client';

import { notFound, useRouter } from 'next/navigation';
import { initialUsers } from '@/data/sampleUsers'; // 修正箇所
import SubHeader from '@/components/SubHeader';

interface UserDetailProps {
  params: { id: string };
}

export default function UserDetail({ params }: UserDetailProps) {
  const user = initialUsers.find(user => user.id === params.id);
  const router = useRouter();

  if (!user) {
    notFound();
  }

  const handleEdit = () => {
    router.push(`/users/${params.id}/edit`);
  };

  const handleDelete = () => {
    // 削除の処理を実装
    console.log('Delete user:', params.id);
  };

  return (
    <div className="flex flex-col h-full">
      <SubHeader
        title="ユーザー 詳細"
        showEditAndDeleteButtons={true}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <div className="flex-1 overflow-auto p-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">{user.name}</h1>
            <p className="text-gray-600 mb-2">ステータス:</p>
            <span className={`inline-block px-2 py-1 rounded-full text-xs ${user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
              {user.status === 'active' ? '有効' : '無効'}
            </span>
            <p className="text-gray-600 mb-2 mt-4">Email:</p>
            <p className="text-gray-700">{user.email}</p>
            <p className="text-gray-600 mb-2 mt-4">ユーザー種別:</p>
            <p className="text-gray-700">{user.userType}</p>
            <p className="text-gray-600 mb-2 mt-4">施設:</p>
            <p className="text-gray-700">{user.facility}</p>
            <p className="text-gray-600 mb-2 mt-4">ロール:</p>
            <p className="text-gray-700">{user.role}</p>
            <p className="text-gray-600 mb-2 mt-4">グループ:</p>
            <p className="text-gray-700">{user.group}</p>
            <p className="text-gray-600 mb-2 mt-4">管理者権限:</p>
            <p className="text-gray-700">{user.isAdmin ? '有' : '無'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
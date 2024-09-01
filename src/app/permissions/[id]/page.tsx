'use client';

import { notFound, useRouter } from 'next/navigation';
import { samplePermissions } from '@/data/samplePermissions';
import SubHeader from '@/components/SubHeader';

interface PermissionDetailProps {
  params: { id: string };
}

export default function PermissionDetail({ params }: PermissionDetailProps) {
  const permission = samplePermissions.find(permission => permission.id === params.id);
  const router = useRouter();

  if (!permission) {
    notFound();
  }

  const handleEdit = () => {
    router.push(`/permissions/${params.id}/edit`);
  };

  const handleDelete = () => {
    // 削除の処理を実装
    console.log('Delete permission:', params.id);
  };

  return (
    <div className="flex flex-col h-full">
      <SubHeader
        title="権限 詳細"
        showEditAndDeleteButtons={true}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <div className="flex-1 overflow-auto p-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">{permission.name}</h1>
            <p className="text-gray-600 mb-2">ロール:</p>
            <p className="text-gray-700">{permission.role}</p>
            <p className="text-gray-600 mb-2 mt-4">アクセスレベル:</p>
            <p className="text-gray-700">{permission.accessLevel}</p>
            <p className="text-gray-600 mb-2 mt-4">リソース:</p>
            <p className="text-gray-700">{permission.resource}</p>
            <p className="text-gray-600 mb-2 mt-4">ステータス:</p>
            <span className={`inline-block px-2 py-1 rounded-full text-xs ${permission.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
              {permission.status === 'active' ? '有効' : '無効'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
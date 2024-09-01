'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import PermissionForm from '@/components/PermissionForm';
import SubHeader from '@/components/SubHeader';
import { samplePermissions, Permission } from '@/data/samplePermissions';

interface EditPermissionProps {
  params: { id: string };
}

export default function EditPermission({ params }: EditPermissionProps) {
  const router = useRouter();
  const [permission, setPermission] = useState<Permission | null>(null);

  useEffect(() => {
    const foundPermission = samplePermissions.find(permission => permission.id === params.id);
    if (foundPermission) {
      setPermission(foundPermission);
    }
  }, [params.id]);

  const handleSubmit = async (data: Permission) => {
    // ここでAPIを呼び出して権限データを更新
    console.log('更新された権限データ:', data);
    // 更新成功後、権限詳細ページにリダイレクト
    router.push(`/permissions/${params.id}`);
  };

  const handleCancel = () => {
    router.back();
  };

  if (!permission) {
    return (
      <div className="flex flex-col h-full">
        <SubHeader title="権限 編集" />
        <div className="flex-1 overflow-auto p-6">
          <div className="flex items-center justify-center h-full">
            <p className="text-xl text-gray-500">読み込み中...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <SubHeader title="権限 編集" />
      <div className="flex-1 overflow-auto p-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <PermissionForm
              initialData={permission}
              onSubmit={handleSubmit}
              onCancel={handleCancel}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
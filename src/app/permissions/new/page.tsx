'use client';

import { useRouter } from 'next/navigation';
import PermissionForm from '@/components/PermissionForm';
import SubHeader from '@/components/SubHeader';

interface Permission {
  name: string;
  role: string;
  accessLevel: string;
  resource: string;
  status: 'active' | 'inactive';
}

export default function CreatePermission() {
  const router = useRouter();

  const handleSubmit = async (data: Permission) => {
    // ここでAPIを呼び出して新規権限を登録
    console.log('新規権限データ:', data);
    // 登録成功後、権限一覧ページにリダイレクト
    router.push('/permissions');
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <div className="flex flex-col h-full">
      <SubHeader title="権限 新規登録" />
      <div className="flex-1 overflow-auto p-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <PermissionForm 
              onSubmit={handleSubmit}
              onCancel={handleCancel}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
'use client';

import { useRouter } from 'next/navigation';
import GroupForm from '@/components/GroupForm';
import SubHeader from '@/components/SubHeader';

interface Group {
  name: string;
  status: 'active' | 'inactive';
  facility: string;
  layout: string;
}

export default function CreateGroup() {
  const router = useRouter();

  const handleSubmit = async (data: Group) => {
    // ここでAPIを呼び出して新規グループを登録
    console.log('新規グループデータ:', data);
    // 登録成功後、グループ一覧ページにリダイレクト
    router.push('/groups');
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <div className="flex flex-col h-full">
      <SubHeader title="グループ 新規登録" />
      <div className="flex-1 overflow-auto p-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <GroupForm 
              onSubmit={handleSubmit}
              onCancel={handleCancel}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
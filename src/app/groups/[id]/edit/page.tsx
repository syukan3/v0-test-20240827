'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import GroupForm from '@/components/GroupForm';
import SubHeader from '@/components/SubHeader';

interface EditGroupProps {
  params: { id: string };
}

interface Group {
  name: string;
  status: 'active' | 'inactive';
  facility: string;
  layout: string;
}

export default function EditGroup({ params }: EditGroupProps) {
  const router = useRouter();
  const [group, setGroup] = useState<Group | null>(null);

  useEffect(() => {
    // ここでグループデータを取得するAPIを呼び出す
    // 実際のアプリケーションでは、APIからデータを取得します
    // この例では、仮のデータをセットしています
    setGroup({
      name: 'グループA',
      status: 'active',
      facility: '施設A',
      layout: 'レイアウトA',
    });
  }, [params.id]);

  const handleSubmit = async (data: Group) => {
    // ここでAPIを呼び出してグループデータを更新
    console.log('更新されたグループデータ:', data);
    // 更新成功後、グループ詳細ページにリダイレクト
    router.push(`/groups/${params.id}`);
  };

  const handleCancel = () => {
    router.back();
  };

  if (!group) {
    return (
      <div className="flex flex-col h-full">
        <SubHeader title="グループ 編集" />
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
      <SubHeader title="グループ 編集" />
      <div className="flex-1 overflow-auto p-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <GroupForm
              initialData={group}
              onSubmit={handleSubmit}
              onCancel={handleCancel}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
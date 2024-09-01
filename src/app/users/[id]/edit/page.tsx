'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import UserForm from '@/components/UserForm';
import SubHeader from '@/components/SubHeader';
import { initialUsers } from '@/data/sampleUsers'; // 修正箇所

interface EditUserProps {
  params: { id: string };
}

interface User {
  name: string;
  status: 'active' | 'inactive';
  email: string;
  userType: string;
  facility: string;
  role: string;
  group: string;
  isAdmin: boolean;
}

export default function EditUser({ params }: EditUserProps) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userData = initialUsers.find(user => user.id === params.id);
    setUser(userData || null);
  }, [params.id]);

  const handleSubmit = async (data: User) => {
    // ここでAPIを呼び出してユーザーデータを更新
    console.log('更新されたユーザーデータ:', data);
    // 更新成功後、ユーザー詳細ページにリダイレクト
    router.push(`/users/${params.id}`);
  };

  const handleCancel = () => {
    router.back();
  };

  if (!user) {
    return (
      <div className="flex flex-col h-full">
        <SubHeader title="ユーザー 編集" />
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
      <SubHeader title="ユーザー 編集" />
      <div className="flex-1 overflow-auto p-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <UserForm
              initialData={user}
              onSubmit={handleSubmit}
              onCancel={handleCancel}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
'use client';

import { useRouter } from 'next/navigation';
import UserForm from '@/components/UserForm';
import SubHeader from '@/components/SubHeader';

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

export default function CreateUser() {
  const router = useRouter();

  const handleSubmit = async (data: User) => {
    // ここでAPIを呼び出して新規ユーザーを登録
    console.log('新規ユーザーデータ:', data);
    // 登録成功後、ユーザー一覧ページにリダイレクト
    router.push('/users');
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <div className="flex flex-col h-full">
      <SubHeader title="ユーザー 新規登録" />
      <div className="flex-1 overflow-auto p-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <UserForm
              onSubmit={handleSubmit}
              onCancel={handleCancel}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
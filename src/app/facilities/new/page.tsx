'use client';

import { useRouter } from 'next/navigation';
import FacilityForm from '@/components/FacilityForm';

export default function CreateFacility() {
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    // ここでAPIを呼び出して新規施設を登録
    console.log('新規施設データ:', data);
    // 登録成功後、施設一覧ページにリダイレクト
    router.push('/facilities');
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">新規施設登録</h1>
      <FacilityForm onSubmit={handleSubmit} />
    </div>
  );
}
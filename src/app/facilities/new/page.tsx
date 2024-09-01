'use client';

import { useRouter } from 'next/navigation';
import FacilityForm from '@/components/FacilityForm';
import SubHeader from '@/components/SubHeader';

export default function CreateFacility() {
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    // ここでAPIを呼び出して新規施設を登録
    console.log('新規施設データ:', data);
    // 登録成功後、施設一覧ページにリダイレクト
    router.push('/facilities');
  };

  return (
    <>
      <SubHeader title="施設 新規登録" />
      <div className="container mx-auto p-3 bg-gray-50 min-h-screen">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <FacilityForm onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </>
  );
}
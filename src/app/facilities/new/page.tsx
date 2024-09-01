'use client';

import { useRouter } from 'next/navigation';
import FacilityForm from '@/components/FacilityForm';
import SubHeader from '@/components/SubHeader';

interface Facility {
  name: string;
  address: string;
  managementFacility: string;
  timezone: string;
  serviceEndDate: string;
}

export default function CreateFacility() {
  const router = useRouter();

  const handleSubmit = async (data: Facility) => {
    // ここでAPIを呼び出して新規施設を登録
    console.log('新規施設データ:', data);
    // 登録成功後、施設一覧ページにリダイレクト
    router.push('/facilities');
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <div className="flex flex-col h-full">
      <SubHeader title="施設 新規登録" />
      <div className="flex-1 overflow-auto p-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <FacilityForm 
              onSubmit={handleSubmit}
              onCancel={handleCancel}
            />
          </div>
        </div>
      </div>
    </div>
  );
}